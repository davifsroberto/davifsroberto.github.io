import { LocalizedProfile } from '../types/profile.type';
import profileContact from '../locales/home/contact/profile.json';

const mapUrl =
  'https://www.google.com/maps/place/Alphaville+Industrial,+Barueri+-+SP/@-23.4985819,-46.8903414,14z/data=!3m1!4b1!4m15!1m8!3m7!1s0x94cf03dd6cef1295:0x746b94a987d123a3!2sBarueri+-+SP!3b1!8m2!3d-23.5035038!4d-46.8785555!16zL20vMDN4emxk!3m5!1s0x94cf023b2dee9c5b:0x314130df0ce37972!8m2!3d-23.5013567!4d-46.8482951!16s%2Fg%2F1ywqftq_m?entry=ttu';

export const profile: LocalizedProfile = {
  pt: {
    name: 'Davi Roberto',
    role: 'Frontend Engineer',
    email: 'davifsroberto@outlook.com',
    phone: '+55 11 94161-9672',
    avatar: {
      src: '/assets/images/general/perfil_davifsroberto.jpg',
      alt: 'Davi Roberto - Frontend Engineer',
      width: 150,
      height: 150,
    },
    whatsapp: profileContact.pt.whats,
    location: {
      label: profileContact.pt.local,
      mapUrl,
    },
  },
  en: {
    name: 'Davi Roberto',
    role: 'Frontend Engineer',
    email: 'davifsroberto@outlook.com',
    phone: '+55 11 94161-9672',
    avatar: {
      src: '/assets/images/general/perfil_davifsroberto.jpg',
      alt: 'Davi Roberto - Frontend Engineer',
      width: 150,
      height: 150,
    },
    whatsapp: profileContact.en.whats,
    location: {
      label: profileContact.en.local,
      mapUrl,
    },
  },
};
