import { Language } from '../utils/language.utils';
import { Education } from '../types/education.type';
import cv from '../locales/cv/index.json';

export const education = {
  pt: cv.pt.education.items,
  en: cv.en.education.items,
} as Record<Language, Education[]>;
