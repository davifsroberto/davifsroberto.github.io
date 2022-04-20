import { Container } from './styles';
import { Skill } from '../../Skill';
import { mountSkillAboutHelper } from '../../Skill/skill.helper';
import { useRouter } from 'next/router';
import { LanguageType as lang } from '../../../types/language.type';
import about from '../../../locales/home/about/about-me.json';

export function About() {
  const router = useRouter();

  const language = router.locale === lang.pt ? lang.pt : lang.en;

  return (
    <Container id="about" className="py-3">
      <div className="container">
        <p className="paragraph">{about[language].title}</p>
        <h3 className="mb-sm-5 mb-4">{about[language].subTitle}</h3>

        <div className="row">
          <section className="col-sm-12 col-md-6 col-lg-6 mb-4">
            <h4>{about[language].desc.title}</h4>

            <p>
              {about[language].desc.one}
              <br />
              {about[language].desc.two}
              <i>{about[language].desc.three}</i>
              {about[language].desc.four}
              <br />
              {about[language].desc.five}
            </p>
          </section>

          <section className="col-sm-12 col-md-6 col-lg-6">
            <h4>{about[language].skillTitle}</h4>

            <Skill skills={mountSkillAboutHelper(language)} />
          </section>
        </div>
      </div>
    </Container>
  );
}
