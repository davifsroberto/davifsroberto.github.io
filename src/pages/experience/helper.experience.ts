import { ExperienceType } from '../../types/experience.type';

export function mountAllExperienceHelper(): ExperienceType[] {
  return [
    {
      id: 1,
      company: {
        name: 'Universo Tintas',
        link: 'https://www.linkedin.com/company/universotintas',
        image: {
          src: '/assets/images/experience/universo-logo.svg',
          alt: 'Experiência Universo Tintas',
          width: 160,
          height: 50,
        },
      },
      title: 'Assistente de suporte técnico',
      period: '11/09 - 11/11',
      description:
        'Comecei como office boy interno, depois tive a oportunidade de trabalhar no setor de TI da empresa e, sem dúvida, aproveitei a oportunidade que me foi dada devido ao meu esforço e reconhecimento dos meus supervisores em minhas atividades. Foi minha primeira experiência com a área de T.I, não sabia nada no começo, mas me dediquei e absorvi todo o conhecimento dos meus instrutores. Até hoje sou muito grato pela oportunidade que tive, pois foi lá que conheci a área de programação apenas observando o desenvolvimento de um sistema, e essa foi uma porta para a área de Desenvolvimento Web que amei, segui e estou até hoje.',
      classPosition: ' text-end ',
      last: true,
    },
    {
      id: 2,
      company: {
        name: 'TIM Brasil',
        link: 'https://www.linkedin.com/company/timbrasil',
        image: {
          src: '/assets/images/experience/tim-logo.png',
          alt: 'Experiência TIM Brasil',
          width: 150,
          height: 38,
        },
      },
      title: 'Técnico de Redes de Computadores',
      period: '03/13 - 02/14',
      description:
        'Contratado para trabalhar com suporte técnico em redes de computadores, iniciei em um grande projeto inovador que estava sendo migrado da Itália para o Brasil, onde adquiri boas experiências na área de redes e telecom. Me dava muito bem com a equipe e as demandas do projeto durante o tempo em que estive presente na TIM Brasil. Precisei optar por sair do projeto e da empresa para me dedicar a área de Desenvolvimento Web',
    },
    {
      id: 3,
      company: {
        name: 'Soyuz',
        link: 'https://www.linkedin.com/company/soyuz-studio/about',
        image: {
          src: '/assets/images/experience/soyuz-logo.svg',
          alt: 'Experiência Soyuz',
          width: 150,
          height: 90,
        },
      },
      title: 'Web Developer',
      period: '07/15 - 01/16',
      tag: ['#WordPress'],
      description:
        'Contratado para trabalhar como estagiário por 6 meses, atuei como desenvolvedor web, focado no site dos clientes da empresa trabalhando com front-end.',
      classPosition: ' text-end ',
    },
    {
      id: 4,
      company: {
        name: 'Inter.net Brasil',
        link: 'https://www.linkedin.com/company/inter-net-brasil',
        image: {
          src: '/assets/images/experience/inter.net-logo.png',
          alt: 'Experiência inter.net',
          width: 200,
          height: 75,
        },
      },
      title: 'Web Developer',
      period: '01/16 - 07/16',
      tag: ['#WordPress'],
      description:
        'Contratado para trabalhar como estagiário por 6 meses, atuei como desenvolvedor web, focado no site dos clientes da empresa trabalhando com back-end e front-end.',
    },
    {
      id: 5,
      company: {
        name: 'Deevo Studio',
        link: 'https://www.linkedin.com/company/deevo',
        image: {
          src: '/assets/images/experience/deevo-logo.png',
          alt: 'Experiência Deevo Studio',
          width: 150,
          height: 50,
        },
      },
      title: 'Frontend Developer',
      period: '01/15 - 12/16',
      tag: ['#WordPress'],
      description:
        'Tendo a possibilidade de trabalhar em outros projetos em paralelo, aceitei o convite para fazer parte da equipe de desenvolvimento do Deevo Studio e desenvolver projetos para a web. Meu foco era desenvolver sites institucionais e CMS usando Wordpress. Algumas tecnologias que usam o Deevo Studio: HTML5, CSS, JavaScript/jQuery, PHP, WordPress, MySQL, Git.',
      classPosition: ' text-end ',
    },
    {
      id: 6,
      company: {
        name: 'Grupo Fast Solutions',
        link: 'https://www.linkedin.com/company/grupo-fast-solutions-oficial-',
        image: {
          src: '/assets/images/experience/fast-logo.png',
          alt: 'Experiência Grupo Fast Solutions',
          width: 225,
          height: 45,
        },
      },
      title: 'Web Developer Full Stack',
      period: '07/17 - 10/29',
      tag: ['#Angular', '#React', '#Vue', '#ASP.NET Core'],
      description:
        'Analisar e desenvolver sistemas web para grandes corporações, sempre com foco em soluções para o cliente e suas necessidades de negócios, envolvendo questões como alto padrão de qualidade de código, performance, segurança e experiência do usuário. Algumas tecnologias que utilizava neste processo: Front-End: HTML5, CSS3, Sass, JavaScript, ECMAScript 6+, jQuery, JSON, VueJS, Angular, UX, Photoshop, WebPack; Back-End: .NET, ASP.NET CORE, C#, SQL Server, Dapper, Entity Framework Core. Geral: MVC, MVVM, TFS, GitHub, SEO, WEB API, SPA, Componentização, NPM, REST, JWT, P.O.O, entre outros.',
    },
    {
      id: 7,
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
      period: '10/19 - 10/21',
      tag: ['#Angular', '#React'],
      description:
        'Desenvolvimento de sistemas para a área financeira, criação de dashboards, aplicativos que monitoram os serviços e geram relatórios sobre as instabilidades dos serviços de transações financeiras. Algumas tecnologias que utilizava nesse processo: Angular 2+, React, UI/UX, Sass, Bootstrap, Agile Scrum.',
      classPosition: ' text-end ',
    },
    {
      id: 8,
      company: {
        name: 'Rommanel',
        link: 'https://br.linkedin.com/company/rommanel',
        image: {
          src: '/assets/images/experience/rommanel-logo.png',
          alt: 'Experiência Rommanel',
          width: 155,
          height: 50,
        },
      },
      title: 'Principal Frontend Engineer',
      period: '10/20 - 12/21',
      tag: ['#Angular'],
      description:
        'Utilizando o framework Angular, desenvolvo sistemas para web e mobile por completo, tratando de questões de segurança, performance, UI/UX, arquitetura de aplicações, modularização e afins. Sempre utilizando boas práticas de desenvolvimento e metodologias ágeis. Lidando também com os principais tipos de testes como: testes automatizados, testes unitários, integração e e2e. Também Auxiliava colegas que tinham menos conhecimento no desenvolvimento web',
    },
    {
      id: 9,
      company: {
        name: 'Mottu',
        link: 'https://www.linkedin.com/company/mottuapp',
        image: {
          src: '/assets/images/experience/mottu-logo.png',
          alt: 'Experiência Mottu',
          width: 170,
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
      id: 10,
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
  ];
}
