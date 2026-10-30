#!/usr/bin/env python3
"""Generate the static CV downloads from the local PDF template and JSON data."""

import json
import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import urlsplit

import pymupdf as fitz

ROOT = Path(__file__).resolve().parents[2]
TEMPLATE = ROOT / "scripts/cv/template.pdf"
OUTPUTS = {"pt": "Davi-Roberto_CV.pdf", "en": "Davi-Roberto_Resume.pdf"}
BLUE = (11 / 255, 95 / 255, 1)
DARK = (26 / 255, 26 / 255, 26 / 255)
MUTED = (91 / 255, 101 / 255, 112 / 255)
WIDTH = 519
JOB_SLOTS = [
    (0, 405, 520),
    (0, 547, 662),
    (0, 690, 805),
    (1, 52, 154),
    (1, 182, 282),
    (1, 309, 355),
    (1, 382, 453),
    (1, 481, 511),
    (1, 539, 569),
    (1, 597, 655),
]
STUDY_SLOTS = [(710, 725, 721.2), (728, 744, 739.5), (746, 762, 758)]
MONTHS = {
    "pt": ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"),
    "en": ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"),
}


def load_json(path):
    with (ROOT / path).open(encoding="utf-8") as file:
        return json.load(file)


def load_data():
    return {
        "pdf": load_json("src/locales/cv-pdf/index.json"),
        "cv": load_json("src/locales/cv/index.json"),
        "experience": load_json("src/locales/experience/index.json"),
        "profile": load_json("src/locales/profile/index.json"),
        "banner": load_json("src/locales/home/banner/index.json"),
    }


def normalize(text):
    return " ".join(unicodedata.normalize("NFKC", text).casefold().split())


def normalized_url(url):
    parts = urlsplit(url)
    return parts.scheme, parts.netloc.removeprefix("www."), parts.path.rstrip("/"), parts.query


def period_label(period, language):
    match = re.match(r"^(\d{2})/(\d{2})\s*-\s*(\d{2}/\d{2}|Atual|Current)", period)
    if not match:
        raise ValueError(f"Formato de período não suportado: {period!r}")

    def month_year(value):
        month, year = (int(part) for part in value.split("/"))
        if not 1 <= month <= 12:
            raise ValueError(f"Mês inválido no período: {period!r}")
        return f"{MONTHS[language][month - 1]} {2000 + year}"

    start = month_year(f"{match.group(1)}/{match.group(2)}")
    end = match.group(3)
    end = ("Presente" if language == "pt" else "Present") if end in ("Atual", "Current") else month_year(end)
    return f"{start} – {end}"


def content(data, language):
    if language not in OUTPUTS:
        raise ValueError(f"Idioma não suportado: {language}")
    pdf = data["pdf"]
    localized = pdf[language]
    experience_items = data["experience"][language]["experiencies"]
    education_items = data["cv"][language]["education"]["items"]
    experiences = {item["id"]: item for item in experience_items}
    education = {item["id"]: item for item in education_items}
    if len(experiences) != len(experience_items) or len(education) != len(education_items):
        raise ValueError("Os IDs de experiências e formações devem ser únicos.")
    contacts = {item["id"]: item["description"] for item in data["cv"][language]["about"]["itens"]}
    order = pdf["experienceOrder"]
    if len(order) != len(JOB_SLOTS) or len(set(order)) != len(order):
        raise ValueError("O modelo requer exatamente 10 experiências distintas.")
    if set(order) != set(experiences):
        raise ValueError("As experiências do site e do currículo PDF devem ter os mesmos IDs.")
    if set(localized["experienceBullets"]) != {str(identifier) for identifier in order}:
        raise ValueError("As descrições do currículo PDF devem corresponder às experiências.")
    if not 1 <= len(pdf["educationOrder"]) <= len(STUDY_SLOTS):
        raise ValueError(f"O modelo requer entre 1 e {len(STUDY_SLOTS)} formações.")
    if len(set(pdf["educationOrder"])) != len(pdf["educationOrder"]):
        raise ValueError("As formações do currículo PDF devem ser distintas.")
    if set(pdf["educationOrder"]) != set(education):
        raise ValueError("As formações do site e do currículo PDF devem ter os mesmos IDs.")
    if not set(localized["educationStatus"]).issubset({str(identifier) for identifier in education}):
        raise ValueError("O status de formação aponta para um ID inexistente.")
    if len(localized["skills"]) != 5:
        raise ValueError("O modelo requer exatamente 5 grupos de competências.")
    jobs = []
    for identifier in order:
        item = experiences[identifier]
        bullets = localized["experienceBullets"][str(identifier)]
        if not bullets:
            raise ValueError(f"Experiência {identifier} não possui descrição.")
        jobs.append({
            "title": item["title"],
            "company": item["company"]["name"],
            "period": period_label(item["period"], language),
            "bullets": bullets,
        })
    studies = []
    for identifier in pdf["educationOrder"]:
        item = education[identifier]
        years = re.findall(r"20\d{2}", item["period"])
        if len(years) != 2:
            raise ValueError(f"Formato de período de formação não suportado: {item['period']!r}")
        status = localized["educationStatus"].get(str(identifier))
        studies.append({
            "title": item["title"],
            "institution": item["subtitle"],
            "period": f"{years[0]} – {years[1]}" + (f" ({status})" if status else ""),
        })
    return {
        "name": pdf["name"],
        "location": localized["location"],
        "website": pdf["website"],
        "email": contacts[1],
        "phone": contacts[2],
        "linkedin": contacts[4],
        "github": contacts[5],
        "role": data["profile"][language]["role"],
        "technologies": data["banner"][language]["technologies"].split(", "),
        "localized": localized,
        "jobs": jobs,
        "studies": studies,
    }


def template_matches(doc, data):
    localized = data["localized"]
    regions = [
        (0, 30, 55.8, data["name"].upper()),
        (0, 55.8, 73, " | ".join([data["role"]] + data["technologies"])),
        (0, 77, 90.5, f"{data['location']} | {data['email']['text']} | {data['phone']['text']}"),
        (0, 90.5, 103.5, f"{data['linkedin']['text']} | {data['github']['text']} | {data['website']['text']}"),
        (0, 126, 140, localized["profileTitle"]),
        (0, 149, 214, localized["summary"]),
        (0, 248, 261.5, localized["skillsTitle"]),
        (0, 380, 393.5, localized["experienceTitle"]),
        (1, 688, 702, localized["educationTitle"]),
    ]
    for index, group in enumerate(localized["skills"]):
        top = 270.4 + index * 15.7
        regions.append((0, top, top + 13, group["title"] + " " + " · ".join(group["items"])))
    for job, (page, top, bottom) in zip(data["jobs"], JOB_SLOTS):
        expected = " ".join(
            [job["title"], "·", job["company"], job["period"]]
            + ["› " + bullet for bullet in job["bullets"]]
        )
        regions.append((page, top, bottom, expected))
    for index, (top, bottom, _) in enumerate(STUDY_SLOTS):
        if index < len(data["studies"]):
            study = data["studies"][index]
            expected = f"{study['title']} — {study['institution']} {study['period']}"
        else:
            expected = ""
        regions.append((1, top, bottom, expected))
    links = {normalized_url(link["uri"]) for page in doc for link in page.get_links() if link.get("uri")}
    required_links = {normalized_url(item["link"]) for item in (data["linkedin"], data["github"], data["website"])}
    return links == required_links and all(
        normalize(doc[page].get_textbox(fitz.Rect(37, top, 562, bottom))) == normalize(expected)
        for page, top, bottom, expected in regions
    )


def choose_font(fonts, text, bold=False):
    name = "renderbold" if bold else "renderregular"
    font = fonts[name]
    missing = sorted({char for char in text if not char.isspace() and not font.has_glyph(ord(char))})
    if missing:
        raise ValueError(f"Caracteres não suportados pelas fontes do modelo: {missing}")
    return name, font


def wrap(text, font, size, width):
    lines = []
    current = ""
    for word in text.split():
        candidate = f"{current} {word}".strip()
        if font.text_length(candidate, fontsize=size) <= width:
            current = candidate
        elif current and font.text_length(word, fontsize=size) <= width:
            lines.append(current)
            current = word
        else:
            raise ValueError(f"Texto não cabe no modelo: {word!r}")
    if current:
        lines.append(current)
    return lines


def draw_text(page, fonts, x, baseline, text, size, color=DARK, bold=False, max_width=WIDTH):
    name, font = choose_font(fonts, text, bold)
    if font.text_length(text, fontsize=size) > max_width:
        raise ValueError(f"Texto não cabe na linha do modelo: {text!r}")
    page.insert_text((x, baseline), text, fontname=name, fontsize=size, color=color)
    return font.text_length(text, fontsize=size)


def draw_paragraph(page, fonts, text, top, bottom, size=10.5):
    name, font = choose_font(fonts, text)
    lines = wrap(text, font, size, WIDTH)
    step = size * 1.22
    if top + size + (len(lines) - 1) * step > bottom - 2:
        raise ValueError(f"Texto excede o espaço disponível no modelo: {text[:80]!r}")
    for index, line in enumerate(lines):
        page.insert_text((38, top + size + index * step), line, fontname=name, fontsize=size, color=DARK)


def draw_job(page, fonts, job, top, bottom):
    title = job["title"]
    company = "  ·  " + job["company"]
    period = "    " + job["period"]
    for size in (11.5, 11, 10.5, 10, 9.5):
        _, title_font = choose_font(fonts, title, True)
        _, regular_font = choose_font(fonts, company + period)
        total = title_font.text_length(title, fontsize=size) + regular_font.text_length(company + period, fontsize=size - 0.5)
        if total <= WIDTH:
            break
    else:
        raise ValueError(f"Cabeçalho da experiência não cabe: {title}")
    x = 38
    x += draw_text(page, fonts, x, top + 11, title, size, bold=True)
    x += draw_text(page, fonts, x, top + 11, company, size - 0.5, BLUE, max_width=WIDTH - (x - 38))
    draw_text(page, fonts, x, top + 11, period, size - 0.5, MUTED, max_width=WIDTH - (x - 38))
    for body_size in (10.5, 10, 9.5, 9, 8.5):
        wrapped = []
        for bullet in job["bullets"]:
            name, font = choose_font(fonts, bullet)
            wrapped.append((name, wrap(bullet, font, body_size, WIDTH - 13)))
        step = body_size * 1.22
        last_baseline = top + 26 + sum(len(lines) * step for _, lines in wrapped) - step + (len(wrapped) - 1) * 2.5
        if last_baseline <= bottom - 3:
            break
    else:
        raise ValueError(f"Descrição excede o espaço da experiência: {title}")
    y = top + 26
    for name, lines in wrapped:
        draw_text(page, fonts, 38, y, "›", body_size, BLUE, bold=True)
        for index, line in enumerate(lines):
            page.insert_text((46.5 if index == 0 else 51, y), line, fontname=name, fontsize=body_size, color=DARK)
            y += step
        y += 2.5


def install_fonts(page):
    regular = ROOT / "scripts/cv/fonts/Carlito-Regular.ttf"
    bold = ROOT / "scripts/cv/fonts/Carlito-Bold.ttf"
    page.insert_font(fontname="renderregular", fontfile=str(regular))
    page.insert_font(fontname="renderbold", fontfile=str(bold))
    return {
        "renderregular": fitz.Font(fontfile=str(regular)),
        "renderbold": fitz.Font(fontfile=str(bold)),
    }


def draw_skills(page, fonts, groups):
    for index, group in enumerate(groups):
        baseline = 280.1 + index * 15.7
        x = 38
        x += draw_text(page, fonts, x, baseline, group["title"], 10, bold=True)
        draw_text(page, fonts, x, baseline, "  " + " · ".join(group["items"]), 10, MUTED, max_width=WIDTH - (x - 38))


def draw_study(page, fonts, study, baseline):
    title = study["title"]
    institution = "  —  " + study["institution"]
    period = "    " + study["period"]
    for size in (10.5, 10, 9.5, 9, 8.5):
        _, bold_font = choose_font(fonts, title, True)
        _, regular_font = choose_font(fonts, institution + period)
        total = bold_font.text_length(title, fontsize=size) + regular_font.text_length(institution + period, fontsize=size)
        if total <= WIDTH:
            break
    else:
        raise ValueError(f"Formação não cabe no modelo: {title}")
    x = 38
    x += draw_text(page, fonts, x, baseline, title, size, bold=True)
    x += draw_text(page, fonts, x, baseline, institution, size, BLUE, max_width=WIDTH - (x - 38))
    draw_text(page, fonts, x, baseline, period, size, MUTED, max_width=WIDTH - (x - 38))


def draw_contact(page, fonts, data):
    contact = f"{data['location']}   |   {data['email']['text']}   |   {data['phone']['text']}"
    draw_text(page, fonts, 38, 87.2, contact, 9.5, MUTED)
    for link in page.get_links():
        page.delete_link(link)
    x = 38
    for index, item in enumerate((data["linkedin"], data["github"], data["website"])):
        if index:
            x += draw_text(page, fonts, x, 100.2, "   |   ", 9.5, MUTED, max_width=WIDTH - (x - 38))
        width = draw_text(page, fonts, x, 100.2, item["text"], 9.5, BLUE, max_width=WIDTH - (x - 38))
        page.insert_link({"kind": fitz.LINK_URI, "from": fitz.Rect(x, 90, x + width, 103), "uri": item["link"]})
        x += width


def generate_pdf(language, data, template_bytes):
    values = content(data, language)
    doc = fitz.open(stream=template_bytes, filetype="pdf")
    if len(doc) != 2:
        raise ValueError("O modelo do currículo deve conter exatamente duas páginas.")
    if language == "pt" and template_matches(doc, values):
        return template_bytes
    for page in doc:
        page.add_redact_annot(page.rect, fill=None, cross_out=False)
        page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE, graphics=fitz.PDF_REDACT_LINE_ART_NONE)
    pages = [doc[0], doc[1]]
    fonts = [install_fonts(page) for page in pages]
    first, second = pages
    first_fonts, second_fonts = fonts
    localized = values["localized"]
    draw_text(first, first_fonts, 38, 50.3, values["name"].upper(), 20, bold=True)
    draw_text(first, first_fonts, 38, 69.3, " | ".join([values["role"]] + values["technologies"]), 13, BLUE, bold=True)
    draw_contact(first, first_fonts, values)
    draw_text(first, first_fonts, 38, 137.1, localized["profileTitle"].upper(), 10.5, BLUE, bold=True)
    draw_paragraph(first, first_fonts, localized["summary"], 149, 215)
    draw_text(first, first_fonts, 38, 258.3, localized["skillsTitle"].upper(), 10.5, BLUE, bold=True)
    draw_skills(first, first_fonts, localized["skills"])
    draw_text(first, first_fonts, 38, 390.4, localized["experienceTitle"].upper(), 10.5, BLUE, bold=True)
    for job, (page_index, top, bottom) in zip(values["jobs"], JOB_SLOTS):
        draw_job(pages[page_index], fonts[page_index], job, top, bottom)
    draw_text(second, second_fonts, 38, 699, localized["educationTitle"].upper(), 10.5, BLUE, bold=True)
    for study, (_, _, baseline) in zip(values["studies"], STUDY_SLOTS):
        draw_study(second, second_fonts, study, baseline)
    return doc.tobytes(garbage=4, deflate=True, no_new_id=True)


def main():
    data = load_data()
    template = TEMPLATE.read_bytes()
    generated = {language: generate_pdf(language, data, template) for language in OUTPUTS}
    for language, filename in OUTPUTS.items():
        path = ROOT / "public" / filename
        path.write_bytes(generated[language])
        print(f"Gerado: {path.relative_to(ROOT)}")


if __name__ == "__main__":
    try:
        main()
    except (OSError, KeyError, ValueError, RuntimeError) as error:
        print(f"Erro ao gerar currículo: {error}", file=sys.stderr)
        sys.exit(1)
