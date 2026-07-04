import { primaryNavigation } from '../../../data/navigation';
import { NavigationItem } from '../../../types/navigation.type';
import { SetLanguageUtils } from '../../../utils/language.utils';

export function mountMenuHelper(): NavigationItem[] {
  return primaryNavigation[SetLanguageUtils()];
}
