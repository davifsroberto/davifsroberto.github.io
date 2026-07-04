import { describe, expect, it } from 'vitest';

import { mountSocialMediasUtils } from './social-medias.utils';
import socialMedia from '../locales/social-media/index.json';
import { setMockRouter } from '../test/mocks/next-router';

describe('social media utils', () => {
  it.each([
    ['/', 'pt'],
    ['/en', 'en'],
  ] as const)('returns social media links for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountSocialMediasUtils()).toEqual(socialMedia[language]);
  });
});
