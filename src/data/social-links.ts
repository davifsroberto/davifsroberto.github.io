import { Language } from '../utils/language.utils';
import { SocialLink } from '../types/social-link.type';
import socialMedia from '../locales/social-media/index.json';

export const socialLinks = socialMedia as Record<Language, SocialLink[]>;
