import Link from 'next/link';

import { Container } from './styles';
import { Experience } from '../../Experience';
import { mountExperienceHomeHelper } from '../home.helper';
import {
  getLocalizedPath,
  SetLanguageUtils as language,
} from '../../../utils/language.utils';
import experience from '../../../locales/home/experience/index.json';

export function ExperienceHome() {
  const selectedLanguage = language();

  return (
    <Container id="experience" className="py-3">
      <div className="container">
        <p className="paragraph">{experience[selectedLanguage].title}</p>
        <h3 className="mb-sm-5 mb-4">
          {experience[selectedLanguage].subtitle}
        </h3>

        <section>
          {mountExperienceHomeHelper().map((experience) => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </section>

        <section className="text-center mt-4">
          <Link
            href={getLocalizedPath('/experience', selectedLanguage)}
            className="btn btn-default btn-default-big"
          >
            {experience[selectedLanguage].viewAll} &nbsp;
            <i className="fa fa-arrow-right" />
          </Link>
        </section>
      </div>
    </Container>
  );
}
