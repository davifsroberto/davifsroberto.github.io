import { Language } from '../utils/language.utils';
import { Project } from '../types/project.type';
import portfolio from '../locales/portfolio/index.json';
import homePortfolio from '../locales/home/portfolio/index.json';

export const projects = {
  pt: portfolio.pt.portfolio,
  en: portfolio.en.portfolio,
} as Record<Language, Project[]>;

export const homeProjects = {
  pt: homePortfolio.pt.portfolioHome,
  en: homePortfolio.en.portfolioHome,
} as Record<Language, Project[]>;
