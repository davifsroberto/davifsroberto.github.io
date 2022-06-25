import { ItemMenuType } from './ItemMenuType';
import { SetLanguageUtils } from '../../utils/language.utils';
import menu from '../../locales/home/header/index.json';

export function mountMenuHelper(): ItemMenuType[] {
  return menu[SetLanguageUtils()];
}
