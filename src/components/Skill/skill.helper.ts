import { SkillType } from '../../types/skill.type';
import skills from '../../locales/home/about/skills.json';
import { LanguageType as lang } from '../../types/language.type';

export function mountSkillAboutHelper(locale: string): SkillType[] {
  // switch (key) {
  //   case value:

  //     break;

  //   default:
  //     break;
  // }

  return locale === lang.en ? skills[lang.en] : skills[lang.pt];
}
