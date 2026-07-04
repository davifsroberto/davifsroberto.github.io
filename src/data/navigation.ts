import { NavigationItem } from '../types/navigation.type';
import { Language } from '../utils/language.utils';
import menu from '../locales/home/header/index.json';

export const primaryNavigation = menu as Record<Language, NavigationItem[]>;
