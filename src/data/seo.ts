import { Language } from '../utils/language.utils';

type SeoContent = {
  title: string;
  description: string;
};

type PageSeo = Record<Language, SeoContent>;

export const siteUrl = 'https://davifsroberto.github.io';
export const defaultOgImage = '/assets/images/general/site-thumbnail.png';

export const seo: Record<
  'home' | 'cv' | 'experience' | 'portfolio' | '404',
  PageSeo
> = {
  home: {
    pt: {
      title: 'Davi Roberto - Desenvolvedor Full Stack',
      description:
        'Site pessoal de Davi Roberto com currículo, experiências profissionais, projetos e artigos sobre desenvolvimento de software.',
    },
    en: {
      title: 'Davi Roberto - Full Stack Developer',
      description:
        'Personal website of Davi Roberto with resume, professional experience, projects, and articles about software development.',
    },
  },
  cv: {
    pt: {
      title: 'CV - Davi Roberto',
      description:
        'Currículo online de Davi Roberto com skills, experiências, formação e informações profissionais.',
    },
    en: {
      title: 'Resume - Davi Roberto',
      description:
        'Online resume of Davi Roberto with skills, experience, education, and professional information.',
    },
  },
  experience: {
    pt: {
      title: 'Experiência - Davi Roberto',
      description:
        'Experiências profissionais de Davi Roberto em frontend, engenharia de software e desenvolvimento web.',
    },
    en: {
      title: 'Experience - Davi Roberto',
      description:
        'Professional experience of Davi Roberto in frontend, software engineering, and web development.',
    },
  },
  portfolio: {
    pt: {
      title: 'Portfólio - Davi Roberto',
      description: 'Projetos de frontend desenvolvidos por Davi Roberto.',
    },
    en: {
      title: 'Portfolio - Davi Roberto',
      description: 'Frontend projects developed by Davi Roberto.',
    },
  },
  404: {
    pt: {
      title: 'Página não encontrada - Davi Roberto',
      description: 'A página solicitada não foi encontrada.',
    },
    en: {
      title: 'Page not found - Davi Roberto',
      description: 'The requested page was not found.',
    },
  },
};
