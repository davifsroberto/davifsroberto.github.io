import { projects } from '../../data/projects';
import { Project } from '../../types/project.type';
import { SetLanguageUtils as language } from '../../utils/language.utils';

export function mountPortfolioHelper(): Project[] {
  return projects[language()];
}
