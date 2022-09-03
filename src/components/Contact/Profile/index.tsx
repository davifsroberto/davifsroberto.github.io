import Image from 'next/image';

import { Container } from './styles';
import { originRouterUtils } from '../../../utils/route.utils';
import { SetLanguageUtils as language } from '../../../utils/language.utils';
import profile from '../../../locales/home/contact/profile.json';

export default function Profile() {
  return (
    <Container>
      <section className="head">
        <Image
          className="img"
          width={150}
          height={150}
          src={`${originRouterUtils()}/assets/images/general/perfil_davifsroberto.jpg`}
          alt="Davi Roberto - Frontend Engineer"
        ></Image>
        <h4>Davi Roberto</h4>
        <h5>Frontend Engineer</h5>
      </section>

      <section className="body">
        <p>
          <a
            href={profile[language()].whats.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-whatsapp fw-bolder" />
            &nbsp;{profile[language()].whats.label}
          </a>

          <a href="mailto:davifsroberto@outlook.com">
            <i className="fa fa-envelope" />
            &nbsp;davifsroberto@outlook.com
          </a>

          <a href="tel:+353 89 478 4620">
            <i className="fa fa-phone" />
            &nbsp;+353 89 478 4620
          </a>

          <a
            href="https://www.google.com/maps/place/Waterford/@52.2475049,-7.11303,13z/data=!3m1!4b1!4m5!3m4!1s0x4842c69c63d9e44d:0xc5bb81888b67b9fb!8m2!3d52.2593197!4d-7.1100702"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-map-marker" />
            &nbsp;Waterford - Ireland
          </a>
        </p>
      </section>
    </Container>
  );
}
