import { homeSkills } from '../../data/skills';
import { SkillType } from '../../types/skill.type';
import { SetLanguageUtils } from '../../utils/language.utils';

export function mountSkillAboutHelper(): SkillType[] {
  return homeSkills[SetLanguageUtils()];
}
