import { ItemMenuType } from '../components/Header/ItemMenuType';

export function mountMenuSecondaryHeaderUtils(): ItemMenuType[] {
  return [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Contato',
      link: '#contact',
      className: ' fw-bold text-decoration-underline ',
    },
    {
      name: 'CV',
      link: '/Davi-Roberto_CV.pdf',
      download: true,
    },
  ];
}
