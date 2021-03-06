import type { NextPage } from 'next';

import { Container } from './styles';
import { Experience } from '../../components/Experience';
import { Header } from '../../components/Header';
import { mountAllExperienceHelper } from './helper.experience';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import experience from '../../locales/experience/index.json';

const ExperiencePage: NextPage = () => {
  return (
    <Container>
      <section className="bg-header-default">
        <Header menuCustom={mountMenuSecondaryHeaderUtils()} />
      </section>

      <div className="container py-5">
        <p className="paragraph">{experience[language()].title}</p>
        <h3 className="mb-sm-5 mb-4">{experience[language()].subtitle}</h3>

        <div className="row mb-5">
          <section className="col-sm-12">
            <h4>{experience[language()].posTitle}</h4>

            <p>{experience[language()].info}</p>
          </section>
        </div>

        <section>
          {mountAllExperienceHelper()
            .sort((asc, des) => des.id - asc.id)
            .map((experience) => (
              <Experience key={experience.id} experience={experience} />
            ))}
        </section>
      </div>
    </Container>
  );
};

export default ExperiencePage;
