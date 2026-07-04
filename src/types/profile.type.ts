import { Language } from '../utils/language.utils';

export type Profile = {
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  whatsapp: {
    label: string;
    link: string;
  };
  location: {
    label: string;
    mapUrl: string;
  };
};

export type LocalizedProfile = Record<Language, Profile>;
