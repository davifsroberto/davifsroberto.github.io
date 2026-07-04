import { Language } from '../utils/language.utils';
import { Skill, SkillGroup } from '../types/skill.type';
import about from '../locales/home/about/index.json';
import cv from '../locales/cv/index.json';

export const primarySkills: Skill[] = [
  {
    name: 'Angular',
    class: 'bg-primary',
    progress: 97,
  },
  {
    name: 'React',
    class: 'bg-primary',
    progress: 90,
  },
  {
    name: 'Node.js',
    class: 'bg-primary',
    progress: 80,
  },
];

export const homeSkills = {
  pt: about.pt.skills,
  en: about.en.skills,
} as Record<Language, Skill[]>;

export const cvSkillGroups = {
  pt: cv.pt.skills.groups,
  en: cv.en.skills.groups,
} as Record<Language, SkillGroup[]>;

export const cvSecondarySkills = {
  pt: cv.pt.skills.skillRight,
  en: cv.en.skills.skillRight,
} as Record<Language, Skill[]>;
