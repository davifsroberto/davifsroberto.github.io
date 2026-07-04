import { Container } from './styles';
import { Header } from '../../components/layout/Header';
import { Seo } from '../../components/ui/Seo';
import { Timeline } from '../../components/ui/Timeline';
import { seo } from '../../data/seo';
import {
  mountAboutItemsCvHelper,
  mountMenuCvHelper,
  mountSkillGroupsCvHelper,
  mountTimelineEducationCvHelper,
  mountTimelineExperienceCvHelper,
} from './cv.helper';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import cv from '../../locales/cv/index.json';

export function CvFeature() {
  const selectedLanguage = language();
  const pageSeo = seo.cv[selectedLanguage];
  const cvPdfFile =
    selectedLanguage === 'pt'
      ? 'Davi-Roberto_CV.pdf'
      : 'Davi-Roberto_Resume.pdf';
  const aboutParagraphs = cv[selectedLanguage].about.me.paragraphs || [
    cv[selectedLanguage].about.me.one,
    cv[selectedLanguage].about.me.two,
  ];

  return (
    <Container>
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={selectedLanguage === 'pt' ? '/cv' : '/en/cv'}
      />

      <section className="bg-header-default">
        <Header menuCustom={mountMenuCvHelper()} />
      </section>

      <div className="container-xl py-5">
        <section className="pb-4">
          <p className="paragraph">{cv[selectedLanguage].title}</p>
          <h3 className="mb-sm-5 mb-4">{cv[selectedLanguage].subtitle}</h3>
        </section>

        <section className="bg-page">
          <article className="cover-bg p-3">
            <div className="row header">
              <section className="col-lg-4 col-md-5">
                <figure className="avatar"></figure>
              </section>

              <div className="col-lg-8 col-md-7 text-center text-md-start">
                <h2 className="h1 mt-2 text-white">
                  {cv[selectedLanguage].name}
                </h2>
                <p className="text-white">{cv[selectedLanguage].carrer}</p>
                <br />

                <a
                  className="btn btn-default-reverse"
                  href={`/${cvPdfFile}`}
                  download={cvPdfFile}
                >
                  {cv[selectedLanguage].btnDownload} &nbsp;
                  <i className="fa fa-download" />
                </a>
              </div>
            </div>
          </article>

          <article className="about pb-4 px-3 px-md-5">
            <div className="row gx-lg-5 gy-4">
              <section className="about-summary col-lg-8">
                <h2 className="h3 mb-3">{cv[selectedLanguage].about.title}</h2>
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <article className="about-item col-lg-4 text-start">
                {mountAboutItemsCvHelper().map((item) => (
                  <section key={item.id} className="contact-item">
                    <strong>{item.title}</strong>

                    <span>
                      {item.anchor ? (
                        <a
                          className={item.description.class}
                          href={item.description.link}
                          target={item.description.target}
                        >
                          {item.description.text}
                        </a>
                      ) : (
                        item.description.text
                      )}
                    </span>
                  </section>
                ))}
              </article>
            </div>
          </article>
          <hr />

          <article className="py-5 px-3 px-md-5">
            <h2 className="h3 mb-3">{cv[selectedLanguage].skills.title}</h2>
            <div className="row skill-groups">
              {mountSkillGroupsCvHelper().map((group, index) => (
                <section
                  className={`skill-group skill-group-${
                    index + 1
                  } col-md-6 mb-4`}
                  key={group.title}
                >
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
          <hr />

          <article className="py-5 px-3 px-md-5">
            <h2 className="h3 mb-4">{cv[selectedLanguage].experience.title}</h2>

            <Timeline border={2} times={mountTimelineExperienceCvHelper()} />
          </article>
          <hr />

          <article className="py-5 px-3 px-md-5">
            <h2 className="h3 mb-4">{cv[selectedLanguage].education.title}</h2>

            <Timeline times={mountTimelineEducationCvHelper()} />
          </article>
        </section>
      </div>
    </Container>
  );
}
