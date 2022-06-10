import Link from 'next/link';

import { Container } from './styles';
import { Experience } from '../../Experience';
import { mountExperienceHomeHelper } from '../home.helper';
import { SetLanguageUtils as language } from '../../../utils/language.utils';
import experience from '../../../locales/home/experience/index.json';

export function ExperienceHome() {
  return (
    <Container id="experience" className="py-3">
      <div className="container">
        <p className="paragraph">{experience[language()].title}</p>
        <h3 className="mb-sm-5 mb-4">{experience[language()].subtitle}</h3>

        <section>
          {mountExperienceHomeHelper().map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </section>

        <section className="text-center mt-4">
          <Link href="/experience" passHref>
            <button className="btn btn-default btn-default-big">
              {experience[language()].viewAll} &nbsp;
              <i className="fa fa-arrow-right" />
            </button>
          </Link>
        </section>
      </div>
    </Container>
  );
}
