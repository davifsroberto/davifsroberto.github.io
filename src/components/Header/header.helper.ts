import { ItemMenuType } from './ItemMenuType';
import { LanguageType as lang } from '../../types/language.type';
import menu from '../../locales/home/header/menu.json';

export function mountMenuHelper(locale: string): ItemMenuType[] {
  return locale === lang.en ? menu[lang.en] : menu[lang.pt];
}
