import copy
import unittest

import pymupdf as fitz

import generate_cv


class GenerateCvTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = generate_cv.load_data()
        cls.template = generate_cv.TEMPLATE.read_bytes()

    def test_pdfs_contain_localized_content_and_links_in_order(self):
        for language in ("pt", "en"):
            with self.subTest(language=language):
                self.check_localized_pdf(language)

    def check_localized_pdf(self, language):
        generated = generate_cv.generate_pdf(language, self.data, self.template)
        doc = fitz.open(stream=generated, filetype="pdf")
        self.assertEqual(len(doc), 2)
        text = generate_cv.normalize(" ".join(page.get_text() for page in doc))
        values = generate_cv.content(self.data, language)
        self.assertIn(generate_cv.normalize(values["localized"]["summary"]), text)
        present = "presente" if language == "pt" else "present"
        self.assertIn(f"staff software engineer · hsystem jan 2024 – {present}", text)
        role_line = " | ".join([values["role"]] + values["technologies"])
        self.assertIn(generate_cv.normalize(role_line), text)
        profile = generate_cv.normalize(values["localized"]["profileTitle"])
        experience = generate_cv.normalize(values["localized"]["experienceTitle"])
        education = generate_cv.normalize(values["localized"]["educationTitle"])
        self.assertLess(text.index(profile), text.index(experience))
        self.assertLess(text.index(experience), text.index(education))
        self.assertNotIn("\x00", text)
        self.assertNotIn("\u00a0", text)
        for job in values["jobs"]:
            self.assertIn(generate_cv.normalize(job["title"]), text)
            self.assertIn(generate_cv.normalize(job["company"]), text)
            for bullet in job["bullets"]:
                self.assertIn(generate_cv.normalize(bullet), text)
        actual_links = {link["uri"] for page in doc for link in page.get_links()}
        expected_links = {values[key]["link"] for key in ("linkedin", "github", "website")}
        self.assertEqual(actual_links, expected_links)
        for page in doc:
            for block in page.get_text("dict")["blocks"]:
                for line in block.get("lines", []):
                    for span in line["spans"]:
                        self.assertTrue(page.rect.contains(fitz.Rect(span["bbox"])), span["text"])
        output = generate_cv.ROOT / "public" / generate_cv.OUTPUTS[language]
        self.assertEqual(generated, output.read_bytes())

    def test_experience_bullets_use_first_person(self):
        portuguese_starts = {
            "11": ("Atuo", "Contribuo", "Utilizo", "Faço"),
            "10": ("Desenvolvi", "Contribuí", "Integrei", "Mentorei"),
            "9": ("Arquitetei", "Desenvolvi", "Reestruturei", "Criei"),
            "7": ("Construí", "Desenvolvi", "Atuei", "Implementei"),
            "6": ("Desenvolvi", "Atuei", "Apliquei"),
            "5": ("Desenvolvi", "Atuei"),
            "2": ("Fui contratado", "Construí"),
            "3": ("Atuei",),
            "4": ("Atuei",),
            "1": ("Iniciei", "Experiência que abriu a porta para minha carreira"),
        }
        for identifier, starts in portuguese_starts.items():
            with self.subTest(language="pt", experience=identifier):
                bullets = self.data["pdf"]["pt"]["experienceBullets"][identifier]
                self.assertEqual(len(bullets), len(starts))
                for bullet, start in zip(bullets, starts):
                    self.assertTrue(bullet.startswith(start), bullet)

        for identifier, bullets in self.data["pdf"]["en"]["experienceBullets"].items():
            for index, bullet in enumerate(bullets):
                with self.subTest(language="en", experience=identifier, bullet=index):
                    if identifier == "1" and index == 1:
                        self.assertIn("my career", bullet)
                    else:
                        self.assertTrue(bullet.startswith("I "), bullet)

    def test_changes_to_shared_role_are_rendered(self):
        data = copy.deepcopy(self.data)
        for experience in data["experience"]["pt"]["experiencies"]:
            if experience["id"] == 11:
                experience["title"] = "Engineering Manager"
                break
        else:
            self.fail("HSystem experience was not found")
        generated = generate_cv.generate_pdf("pt", data, self.template)
        text = fitz.open(stream=generated, filetype="pdf")[0].get_text()
        self.assertIn("Engineering Manager", text)
        self.assertNotIn("Staff Software Engineer", text)

    def test_shortened_summary_does_not_reuse_stale_template_text(self):
        data = copy.deepcopy(self.data)
        summary = "Desenvolvedor Full Stack com mais de 15 anos de experiência."
        data["pdf"]["pt"]["summary"] = summary
        generated = generate_cv.generate_pdf("pt", data, self.template)
        text = fitz.open(stream=generated, filetype="pdf")[0].get_text()
        self.assertIn(summary, text)
        self.assertNotIn("evolução de aplicações web", text)

    def test_oversized_content_fails_instead_of_truncating(self):
        data = copy.deepcopy(self.data)
        data["pdf"]["pt"]["experienceBullets"]["11"][0] = "palavra " * 400
        with self.assertRaisesRegex(ValueError, "excede o espaço"):
            generate_cv.generate_pdf("pt", data, self.template)

    def test_new_site_experience_cannot_be_silently_omitted(self):
        data = copy.deepcopy(self.data)
        experience = copy.deepcopy(data["experience"]["pt"]["experiencies"][0])
        experience["id"] = 99
        data["experience"]["pt"]["experiencies"].append(experience)
        with self.assertRaisesRegex(ValueError, "mesmos IDs"):
            generate_cv.generate_pdf("pt", data, self.template)

    def test_english_generation_is_reproducible(self):
        first = generate_cv.generate_pdf("en", self.data, self.template)
        second = generate_cv.generate_pdf("en", self.data, self.template)
        self.assertEqual(first, second)


if __name__ == "__main__":
    unittest.main()
