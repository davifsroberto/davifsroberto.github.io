import { ItemMenuType } from './ItemMenuType';

export function mountMenu(): ItemMenuType[] {
  return [
    {
      name: 'Sobre Mim',
      link: '#about',
    },
    {
      name: 'Experiência',
      link: '#experience',
    },
    {
      name: 'Portfólio',
      link: '#portfolio',
    },
    {
      name: 'Artigos',
      link: '#articles',
    },
    {
      name: 'Recomendações',
      link: '#recommendations',
    },
    {
      name: 'Contato',
      link: '#contact',
      className: 'fw-bold text-decoration-underline',
    },
    {
      name: 'CV',
      link: '/DaviRoberto_CV.pdf',
    },
  ];
}
