import { Container } from './styles';
import { SocialMedia } from '../../SocialMedias';
import { mountSocialMediasUtils } from '../../utils/social-medias.utils';

export function Banner() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <section className="col-lg-7">
            <span className="desc">
              Olá, é um prazer ter você aqui
              <span className="h5">🙂</span>
            </span>
            <br />

            <h2>
              Me chamo
              <br />
              <span>Davi Roberto</span>
            </h2>

            <h4>
              e sou <strong>Frontend Engineer</strong>
            </h4>

            <div className="mt-5">
              <SocialMedia socialMedia={mountSocialMediasUtils()} />
            </div>

            {/* TODO: add animation in button next */}
            <a href="#about" className="btn-go">
              NEXT &nbsp;
              <i className="fa fa-angle-double-right"></i>
            </a>
          </section>
        </div>
      </div>
    </Container>
  );
}
