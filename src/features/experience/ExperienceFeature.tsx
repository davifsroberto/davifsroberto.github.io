import { Container } from './styles';
import { Header } from '../../components/layout/Header';
import { Seo } from '../../components/ui/Seo';
import { seo } from '../../data/seo';
import { mountAllExperienceHelper } from './helper.experience';
import { mountMenuSecondaryHeaderUtils } from '../../utils/header.utils';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import experience from '../../locales/experience/index.json';
import { Experience } from './components/Experience';

export function ExperienceFeature() {
  const selectedLanguage = language();
  const pageSeo = seo.experience[selectedLanguage];

  return (
    <Container>
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={selectedLanguage === 'pt' ? '/experience' : '/en/experience'}
      />

      <section className="bg-header-default">
        <Header menuCustom={mountMenuSecondaryHeaderUtils()} />
      </section>

      <div className="container py-5">
        <p className="paragraph">{experience[selectedLanguage].title}</p>
        <h3 className="mb-sm-5 mb-4">
          {experience[selectedLanguage].subtitle}
        </h3>

        <div className="row mb-5">
          <section className="col-sm-12">
            <h4>{experience[selectedLanguage].posTitle}</h4>

            <p>{experience[selectedLanguage].info}</p>
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
}
