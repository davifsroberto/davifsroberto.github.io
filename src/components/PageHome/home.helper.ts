import { PortfolioGallery } from '../../components/Portfolio/PortfolioGallery';
import { ExperienceType } from '../../types/experience.type';

export function mountExperienceHomeHelper(): ExperienceType[] {
  return [
    {
      id: 1,
      company: {
        name: 'Banco BV',
        link: 'https://www.linkedin.com/company/banco-bv',
        image: {
          src: '/assets/images/experience/bv-logo.png',
          alt: 'Experiência Banco BV',
          width: 135,
          height: 80,
        },
      },
      title: 'Principal Frontend Engineer',
      period: '04/22 - atual',
      tag: ['#Angular'],
      description:
        'Desenvolvimento de aplicações web com o framework Angular. Durante desenvolvimento, fico sempre atento as boas práticas para seguir um alto nível de padrão de código, e no desenvolvimento com testes. Também auxílio desenvolvedores menos experientes no dia a dia para juntos evoluirmos tecnicamente e entregarmos um projeto altamente escalável.',
    },
    {
      id: 2,
      company: {
        name: 'Mottu',
        link: 'https://www.linkedin.com/company/mottuapp',
        image: {
          src: '/assets/images/experience/mottu-logo.png',
          alt: 'Experiência Mottu',
          width: 150,
          height: 50,
        },
      },
      title: 'Principal Frontend Engineer',
      period: '09/21 - 04/22',
      tag: ['#Angular'],
      description:
        'Desenvolvo aplicações para a frente de delivery, aplicativos de backoffice e totens de autoatendimento. Sempre me atento ao desenvolvimento com testes, performance e boas práticas. Ajudo desenvolvedores menos experientes, e trabalho na reestruturação de projetos antigos para uma arquitetura de frontend escalável. Quando necessário, crio as interfaces sem depender de um UI designer. Tenho noções de UI/UX e gosto do assunto. Algumas tecnologias que utilizo neste processo: Angular 12+, Monorepo, Nx Workspace (nx.dev), Module Federation.',
      classPosition: ' text-end ',
    },
    {
      id: 3,
      company: {
        name: 'Cielo',
        link: 'https://www.linkedin.com/company/cielo',
        image: {
          src: '/assets/images/experience/cielo-logo.png',
          alt: 'Experiência Cielo',
          width: 150,
          height: 50,
        },
      },
      title: 'Frontend Engineer',
      period: '09/21 - 04/22',
      tag: ['#React', '#Angular'],
      description:
        'Desenvolvimento de sistemas para a área financeira, criação de dashboards, aplicativos que monitoram os serviços e geram relatórios sobre as instabilidades dos serviços de transações financeiras. Utilizava em minha rotina de desenvolvimento: Angular 2+, React, UI/UX, Sass, Bootstrap, Agile Scrum.',
      last: true,
    },
  ];
}

export function mountPortfolioHomeHelper(): PortfolioGallery[] {
  return [
    {
      id: 1,
      bgBox: '/assets/images/portfolio/mottu/totem/00_bg.png',
      titleBox: 'Mottu - Totem de Autoatendimento',
      images: [
        '/assets/images/portfolio/mottu/totem/01.png',
        '/assets/images/portfolio/mottu/totem/02.png',
        '/assets/images/portfolio/mottu/totem/03.png',
        '/assets/images/portfolio/mottu/totem/04.png',
        '/assets/images/portfolio/mottu/totem/05.png',
        '/assets/images/portfolio/mottu/totem/06.png',
        '/assets/images/portfolio/mottu/totem/07.png',
      ],
    },
    {
      id: 2,
      bgBox: '/assets/images/portfolio/rommanel/mmr/00_bg.png',
      titleBox: 'Meu Mundo Rommanel',
      images: [
        '/assets/images/portfolio/rommanel/mmr/01.png',
        '/assets/images/portfolio/rommanel/mmr/02.png',
        '/assets/images/portfolio/rommanel/mmr/03.png',
        '/assets/images/portfolio/rommanel/mmr/04.png',
        '/assets/images/portfolio/rommanel/mmr/05.png',
        '/assets/images/portfolio/rommanel/mmr/06.png',
        '/assets/images/portfolio/rommanel/mmr/07.png',
        '/assets/images/portfolio/rommanel/mmr/08.png',
        '/assets/images/portfolio/rommanel/mmr/09.png',
        '/assets/images/portfolio/rommanel/mmr/10.png',
      ],
    },
    {
      id: 3,
      bgBox: '/assets/images/portfolio/cielo/dashboard/00_bg.jpg',
      titleBox: 'Cielo - Dashboard Monitor de Serviços',
      images: [
        '/assets/images/portfolio/cielo/dashboard/01.jpg',
        '/assets/images/portfolio/cielo/dashboard/02.png',
        '/assets/images/portfolio/cielo/dashboard/03.png',
        '/assets/images/portfolio/cielo/dashboard/04.png',
        '/assets/images/portfolio/cielo/dashboard/05.png',
        '/assets/images/portfolio/cielo/dashboard/06.png',
        '/assets/images/portfolio/cielo/dashboard/07.png',
      ],
    },
  ];
}
