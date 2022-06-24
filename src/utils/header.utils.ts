import { ItemMenuType } from '../components/Header/ItemMenuType';
import { SetLanguageUtils } from './language.utils';

export function mountMenuSecondaryHeaderUtils(): ItemMenuType[] {
  return [
    {
      name: 'Home',
      link: `${SetLanguageUtils() === 'en' ? '/' : '/pt'}`,
    },
    {
      name: 'Contato',
      link: '#contact',
      className: ' fw-bold text-decoration-underline ',
    },
    {
      name: 'CV',
      link: `${SetLanguageUtils() === 'en' ? '/cv' : '/pt/cv'}`,
    },
  ];
}
