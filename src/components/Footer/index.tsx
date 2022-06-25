import { Container } from './styles';
import { SocialMedia } from '../SocialMedias';
import { mountSocialMediasUtils } from '../../utils/social-medias.utils';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import footer from '../../locales/home/footer/index.json';

export function Footer() {
  return (
    <Container className="pb-3 text-center">
      <div className="container">
        <SocialMedia socialMedia={mountSocialMediasUtils()} />

        <p className="my-2">
          {footer[language()].info}
          <a
            href="https://www.linkedin.com/in/davifsroberto"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;Davi Roberto
          </a>
          <br />
          <span>© 2022 | davifsroberto</span>
        </p>
      </div>
    </Container>
  );
}
