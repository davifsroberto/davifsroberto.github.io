import { ItemMenuType } from '../components/Header/ItemMenuType';
import { SetLanguageUtils } from './language.utils';

export function mountMenuSecondaryHeaderUtils(): ItemMenuType[] {
  return [
    {
      name: 'Home',
      link: `${SetLanguageUtils() === 'pt' ? '/' : '/en'}`,
    },

    {
      name: 'Contato',
      link: '#contact',
      className: ' fw-bold text-decoration-underline ',
    },
    
    {
      name: 'CV',
      link: `${SetLanguageUtils() === 'en' ? '/en/cv' : '/cv'}`,
    },
  ];
}
