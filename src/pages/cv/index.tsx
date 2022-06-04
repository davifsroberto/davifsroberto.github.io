import { NextPage } from 'next';

import { Container } from './styles';
import {
  mountAboutItemsCvHelper,
  mountMenuCvHelper,
  mountSkillLeftCvHelper,
  mountSkillRightCvHelper,
  mountTimelineEducationCvHelper,
  mountTimelineExperienceCvHelper,
} from './cv.helper';
import { Header } from '../../components/Header';
import { Skill } from '../../components/Skill';
import { Timeline } from '../../components/Timeline';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import cv from '../../locales/cv/index.json';

const CvPage: NextPage = () => {
  return (
    <Container>
      <section className="bg-header-default">
        <Header menuCustom={mountMenuCvHelper()} />
      </section>

      <div className="container-xl py-5">
        <section className="pb-4">
          <p className="paragraph">{cv[language()].title}</p>
          <h3 className="mb-sm-5 mb-4">{cv[language()].subtitle}</h3>
        </section>

        <section className="bg-page">
          <article className="cover-bg p-3">
            <div className="row header">
              <section className="col-lg-4 col-md-5">
                <figure className="avatar"></figure>
              </section>

              <div className="col-lg-8 col-md-7 text-center text-md-start">
                <h2 className="h1 mt-2 text-white">{cv[language()].name}</h2>
                <p className="text-white">{cv[language()].carrer}</p>
                <br />

                {/* TODO: create and add english resume */}
                <a
                  className="btn btn-default-reverse"
                  href="/Davi-Roberto_CV.pdf"
                  download={true}
                >
                  {cv[language()].btnDownload} &nbsp;
                  <i className="fa fa-download" />
                </a>
              </div>
            </div>
          </article>

          <article className="about pb-4 px-3 px-md-5">
            <div className="row">
              <section className="col-md-5">
                <h2 className="h3 mb-3">{cv[language()].about.title}</h2>
                <p>
                  {cv[language()].about.me.one}
                  <br />
                  {cv[language()].about.me.two}
                </p>
              </section>

              <article className="about-item col-md-7 mt-4 text-start">
                {mountAboutItemsCvHelper().map((item) => (
                  <section key={item.id} className="row pb-sm-3 pb-1">
                    <section className="col-3 text-md-end">
                      {item.title}
                    </section>

                    <section className="col-9">
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
                    </section>
                  </section>
                ))}
              </article>
            </div>
          </article>
          <hr />

          <article className="py-5 px-3 px-md-5">
            <h2 className="h3 mb-3">{cv[language()].skills.title}</h2>
            <div className="row">
              <div className="col-md-6">
                <Skill skills={mountSkillLeftCvHelper()} />
              </div>

              <div className="col-md-6">
                <Skill skills={mountSkillRightCvHelper()} />
              </div>
            </div>
          </article>
          <hr />

          <article className="py-5 px-3 px-md-5">
            <h2 className="h3 mb-4">{cv[language()].experience.title}</h2>

            <Timeline border={2} times={mountTimelineExperienceCvHelper()} />
          </article>
          <hr />

          <article className="py-5 px-3 px-md-5">
            <h2 className="h3 mb-4">{cv[language()].education.title}</h2>

            <Timeline times={mountTimelineEducationCvHelper()} />
          </article>
        </section>
      </div>
    </Container>
  );
};

export default CvPage;
