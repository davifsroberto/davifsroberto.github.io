import Image from 'next/image';

import { Container } from './styles';
import { profile } from '../../../data/profile';
import { SetLanguageUtils as language } from '../../../utils/language.utils';

export default function Profile() {
  const selectedLanguage = language();
  const currentProfile = profile[selectedLanguage];

  return (
    <Container>
      <section className="head">
        <Image
          className="img"
          width={currentProfile.avatar.width}
          height={currentProfile.avatar.height}
          src={currentProfile.avatar.src}
          alt={currentProfile.avatar.alt}
        />
        <h4>{currentProfile.name}</h4>
        <h5>{currentProfile.role}</h5>
      </section>

      <section className="body">
        <p>
          <a
            href={currentProfile.whatsapp.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-whatsapp fw-bolder" />
            &nbsp;{currentProfile.whatsapp.label}
          </a>

          <a href={`mailto:${currentProfile.email}`}>
            <i className="fa fa-envelope" />
            &nbsp;{currentProfile.email}
          </a>

          <a href={`tel:${currentProfile.phone}`}>
            <i className="fa fa-phone" />
            &nbsp;{currentProfile.phone}
          </a>

          <a
            href={currentProfile.location.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-map-marker" />
            &nbsp;{currentProfile.location.label}
          </a>
        </p>
      </section>
    </Container>
  );
}
