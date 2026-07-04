import { describe, expect, it } from 'vitest';

import { mountMenuHelper } from './header.helper';
import menu from '../../../locales/home/header/index.json';
import { setMockRouter } from '../../../test/mocks/next-router';

describe('header helper', () => {
  it.each([
    ['/', 'pt'],
    ['/en', 'en'],
  ] as const)(
    'returns the localized primary menu for %s',
    (asPath, language) => {
      setMockRouter({ asPath, locale: language });

      expect(mountMenuHelper()).toEqual(menu[language]);
    }
  );
});
