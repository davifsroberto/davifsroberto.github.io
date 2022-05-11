import { Container } from './styles';
import { SocialMedia } from '../SocialMedias';
import { mountSocialMediasUtils } from '../../utils/social-medias.utils';

export function CallToAction() {
  return (
    <Container>
      <div className="container py-lg-5">
        <div className="row">
          <section className="col-lg-6">
            <br />

            <p className="mb-5">
              Gosto de solucionar problemas, e tenho prazer em aprender novas
              tecnologias. <br />
              Acredito em uma boa sinergia com grande troca de ideias.
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
