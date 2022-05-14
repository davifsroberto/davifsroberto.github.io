import { PortfolioGallery } from '../../components/Portfolio/PortfolioGallery';
import { ExperienceType } from '../../types/experience.type';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import experience from '../../locales/home/experience/index.json';
import portfolio from '../../locales/home/portfolio/index.json';

export function mountExperienceHomeHelper(): ExperienceType[] {
  return experience[language()].experiencesHome;
}

export function mountPortfolioHomeHelper(): PortfolioGallery[] {
  return portfolio[language()].portfolioHome;
}
