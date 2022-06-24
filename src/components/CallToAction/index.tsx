import { Container } from './styles';
import { SocialMedia } from '../SocialMedias';
import { mountSocialMediasUtils } from '../../utils/social-medias.utils';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import callToAction from '../../locales/home/callToAction/index.json';

export function CallToAction() {
  return (
    <Container>
      <div className="container py-lg-5">
        <div className="row">
          <section className="col-lg-6">
            <br />

            <p className="mb-5">
              {callToAction[language()].paragraphOne}
              <br />
              {callToAction[language()].paragraphTwo}
            </p>

            <span className="mb-1 d-block">
              Davi Roberto - <strong>Frontend Engineer</strong>
            </span>

            <SocialMedia socialMedia={mountSocialMediasUtils()} />
          </section>
        </div>
      </div>
    </Container>
  );
}
