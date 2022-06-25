import { ExperienceType } from '../../types/experience.type';
import { SetLanguageUtils } from '../../utils/language.utils';
import experience from '../../locales/experience/index.json';

export function mountAllExperienceHelper(): ExperienceType[] {
  return experience[SetLanguageUtils()].experiencies;
}
