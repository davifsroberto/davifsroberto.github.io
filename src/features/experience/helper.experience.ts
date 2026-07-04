import { experiences } from '../../data/experience';
import { ExperienceType } from '../../types/experience.type';
import { SetLanguageUtils } from '../../utils/language.utils';

export function mountAllExperienceHelper(): ExperienceType[] {
  return experiences[SetLanguageUtils()];
}
