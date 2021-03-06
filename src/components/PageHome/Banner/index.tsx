import { Container } from './styles';
import { SocialMedia } from '../../SocialMedias';
import { mountSocialMediasUtils } from '../../../utils/social-medias.utils';
import { SetLanguageUtils as language } from '../../../utils/language.utils';
import banner from '../../../locales/home/banner/index.json';

export function Banner() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <section className="col-md-6">
            <span className="desc">
              {banner[language()].welcomeOne}
              <span className="h5">🙂</span>
            </span>
            <br />

            <h2>
              {banner[language()].welcomeTwo}

              <br />
              <span>{banner[language()].welcomeThree}</span>
            </h2>

            <h4>
              {banner[language()].welcomeFour}
              <strong>Frontend Engineer</strong>
            </h4>

            <div className="mt-5 social-media-box">
              <SocialMedia socialMedia={mountSocialMediasUtils()} />
            </div>

            <a href="#about" className="btn-next">
              NEXT &nbsp;
              <i className="fa fa-angle-double-right" />
            </a>
          </section>
        </div>
      </div>
    </Container>
  );
}
