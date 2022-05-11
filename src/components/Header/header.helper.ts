import { ItemMenuType } from './ItemMenuType';
import { SetLanguageUtils } from '../../utils/language.utils';
import menu from '../../locales/home/header/menu.json';

export function mountMenuHelper(): ItemMenuType[] {
  return menu[SetLanguageUtils()];
}
