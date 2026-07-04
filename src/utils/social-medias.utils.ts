import { socialLinks } from '../data/social-links';
import { SocialMediaType } from '../types/social-media.type';
import { SetLanguageUtils } from '../utils/language.utils';

export function mountSocialMediasUtils(): SocialMediaType[] {
  return socialLinks[SetLanguageUtils()];
}
