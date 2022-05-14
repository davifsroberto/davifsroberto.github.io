import { SkillType } from '../../types/skill.type';
import { SetLanguageUtils } from '../../utils/language.utils';
import about from '../../locales/home/about/index.json';

export function mountSkillAboutHelper(): SkillType[] {
  return about[SetLanguageUtils()].skills;
}
