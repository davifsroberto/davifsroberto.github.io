import { SocialMediaType } from '../types/social-media.type';
import { SetLanguageUtils } from '../utils/language.utils';
import socialMedia from '../locales/social-media/index.json';

export function mountSocialMediasUtils(): SocialMediaType[] {
  return socialMedia[SetLanguageUtils()];
}
