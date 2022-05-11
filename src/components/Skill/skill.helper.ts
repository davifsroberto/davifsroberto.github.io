import { SkillType } from '../../types/skill.type';
import { SetLanguageUtils } from '../../utils/language.utils';
import skills from '../../locales/home/about/skills.json';

export function mountSkillAboutHelper(): SkillType[] {
  return skills[SetLanguageUtils()];
}
