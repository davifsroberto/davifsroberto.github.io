import { Language } from '../utils/language.utils';

export type SeoMetadata = {
  title: string;
  description: string;
};

export type LocalizedSeoMetadata = Record<Language, SeoMetadata>;

export type SeoPage = 'home' | 'cv' | 'experience' | 'portfolio' | '404';

export type SiteSeoMetadata = Record<SeoPage, LocalizedSeoMetadata>;
