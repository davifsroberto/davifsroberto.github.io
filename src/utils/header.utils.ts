import { NavigationItem } from '../types/navigation.type';
import { SetLanguageUtils } from './language.utils';

export function mountMenuSecondaryHeaderUtils(): NavigationItem[] {
  return [
    {
      name: 'Home',
      link: setInfoBylanguage('/', '/en'),
    },

    {
      name: setInfoBylanguage('Contato', 'Contact'),
      link: '#contact',
      className: ' fw-bold text-decoration-underline ',
    },

    {
      name: 'CV',
      link: setInfoBylanguage('/cv', '/en/cv'),
    },
  ];
}

function setInfoBylanguage(infoPt: string, infoEn: string): string {
  return SetLanguageUtils() === 'pt' ? infoPt : infoEn;
}
