import { Container } from './styles';
import { SocialMediaType } from '../types/SocialMediaType';

type SocialMediaProps = {
  socialMedia: SocialMediaType[];
};

export function SocialMedia({ socialMedia }: SocialMediaProps) {
  return (
    <Container>
      {socialMedia.map((media) => (
        <li key={media.href}>
          <a href={media.href} target={media.target}>
            <span className={media.icon}></span>
          </a>
        </li>
      ))}
    </Container>
  );
}
