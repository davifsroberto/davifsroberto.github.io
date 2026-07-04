import { PortfolioGallery } from '../../components/Portfolio/PortfolioGallery';
import { homeExperiences } from '../../data/experience';
import { homeProjects } from '../../data/projects';
import { ExperienceType } from '../../types/experience.type';
import { SetLanguageUtils as language } from '../../utils/language.utils';

export function mountExperienceHomeHelper(): ExperienceType[] {
  return homeExperiences[language()];
}

export function mountPortfolioHomeHelper(): PortfolioGallery[] {
  return homeProjects[language()];
}
