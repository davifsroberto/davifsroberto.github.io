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

          <a href="tel:+55 11 94161-9672">
            <i className="fa fa-phone" />
            &nbsp;+55 11 94161-9672
          </a>

          <a
            href="https://www.google.com/maps/place/Alphaville+Industrial,+Barueri+-+SP/@-23.4985819,-46.8903414,14z/data=!3m1!4b1!4m15!1m8!3m7!1s0x94cf03dd6cef1295:0x746b94a987d123a3!2sBarueri+-+SP!3b1!8m2!3d-23.5035038!4d-46.8785555!16zL20vMDN4emxk!3m5!1s0x94cf023b2dee9c5b:0x314130df0ce37972!8m2!3d-23.5013567!4d-46.8482951!16s%2Fg%2F1ywqftq_m?entry=ttu"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-map-marker" />
            &nbsp;{profile[language()].local}
          </a>
        </p>
      </section>
    </Container>
  );
}
