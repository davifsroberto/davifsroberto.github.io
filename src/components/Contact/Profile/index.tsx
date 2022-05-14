import Image from 'next/image';

import { Container } from './styles';
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
          src="/assets/images/general/perfil_davifsroberto.jpg"
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

          <a href="tel:+55 11 95356 6668">
            <i className="fa fa-phone" />
            &nbsp;+55 11 95356 6668
          </a>

          <a
            href="https://www.google.com/maps/place/Hortol%C3%A2ndia,+State+of+S%C3%A3o+Paulo/@-22.8769465,-47.2440486,13z/data=!3m1!4b1!4m5!3m4!1s0x94c8b95bfb508f39:0x1ce857c1058169b4!8m2!3d-22.8573469!4d-47.2210564"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-map-marker" />
            &nbsp;Hortolândia, SP - Brasil
          </a>
        </p>
      </section>
    </Container>
  );
}
