import { NextPage } from 'next';
import Image from 'next/image';

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
import Timeline from '../../components/Timeline';

const CvPage: NextPage = () => {
  return (
    <Container>
      <section className="bg-header-default">
        <Header menuCustom={mountMenuCvHelper()} />
      </section>

      <div className="container py-5">
        <section className="pb-4">
          <p className="paragraph">Meu CV online</p>
          <h3 className="mb-sm-5 mb-4">
            Clique no botão abaixo para baixar a versão em PDF.
          </h3>
        </section>

        <section className="bg-page">
          <article className="cover-bg p-3">
            <div className="row header">
              <section className="col-lg-4 col-md-5">
                <figure className="avatar hover-effect bg-white shadow-sm p-1">
                  <Image
                    width={200}
                    height={200}
                    src="/assets/images/general/perfil_davifsroberto.jpg"
                  ></Image>
                </figure>
              </section>

              <div className="col-lg-8 col-md-7 text-center text-md-start">
                <h2 className="h1 mt-2 text-white">Davi Roberto</h2>
                <p className="text-white">Frontend Engineer</p>
                <br />

                <a
                  className="btn btn-default-reverse"
                  href="/Davi-Roberto_CV.pdf"
                  download={true}
                  target="_blank"
                >
                  BAIXAR MEU CV &nbsp;
                  <i className="fa fa-download" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="about pb-4 px-5">
            <div className="row">
              <div className="col-md-6">
                <h2 className="h3 mb-3">Sobre mim</h2>
                <p>
                  Olá! Me chamo Davi Roberto, gosto muito de música, leitura e
                  tecnologia. Atuo com desenvolvimento de sistemas a mais de 10
                  anos, e há 8 anos com frontend.
                  <br />
                  Sou frontend engineer sênior, busco sempre me aperfeiçoar e
                  ficar atualizado em minha área de atuação.
                </p>
              </div>

              <div className="col-md-5 offset-md-1 mt-4">
                {mountAboutItemsCvHelper().map((item) => (
                  <div key={item.id} className="row pb-1">
                    <section className="col-sm-4 text-end">
                      {item.title}
                    </section>

                    <section className="col-sm-8">
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
                  </div>
                ))}
              </div>
            </div>
          </article>
          <hr />

          <article className="py-5 px-5">
            <h2 className="h3 mb-3">Algumas Skills</h2>
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

          <article className="py-5 px-5">
            <h2 className="h3 mb-4">Experiência</h2>

            <Timeline border={2} times={mountTimelineExperienceCvHelper()} />
          </article>
          <hr />

          <article className="py-5 px-5">
            <h2 className="h3 mb-4">Educação</h2>

            <Timeline times={mountTimelineEducationCvHelper()} />
          </article>
        </section>
      </div>
    </Container>
  );
};

export default CvPage;
