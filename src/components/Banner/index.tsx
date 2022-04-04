import { Container } from './styles';
import { SocialMedia } from '../SocialMedias';
import { mountSocialMediasUtils } from '../utils/social-medias.utils';

export function Banner() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <section className="col-lg-7">
            <h6>
              Olá, é um <strong>prazer</strong> ter você aqui <span>🙂</span>
            </h6>
            <br />

            <h2>
              Bem-vindo(a)!
              <br />
              <span>Davi Roberto</span>
            </h2>

            <h4>Frontend Engineer</h4>
            <p className="my-4">Uma breve apresentação sobre mim</p>

            <SocialMedia socialMedia={mountSocialMediasUtils()} />

            <a href="#about" className="btn-go">
              Go!
            </a>
          </section>
        </div>
      </div>
    </Container>
  );
}
