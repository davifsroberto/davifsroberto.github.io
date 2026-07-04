import { Language } from '../utils/language.utils';
import { Experience } from '../types/experience.type';
import experience from '../locales/experience/index.json';
import homeExperience from '../locales/home/experience/index.json';

export const experiences = {
  pt: experience.pt.experiencies,
  en: experience.en.experiencies,
} as Record<Language, Experience[]>;

export const homeExperiences = {
  pt: homeExperience.pt.experiencesHome,
  en: homeExperience.en.experiencesHome,
} as Record<Language, Experience[]>;
