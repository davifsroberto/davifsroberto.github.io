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
      name: 'Contatos',
      link: '#contact',
      className: 'fw-bold',
    },
    {
      name: 'CV',
      link: '/DaviRoberto_CV.pdf',
    },
  ];
}
