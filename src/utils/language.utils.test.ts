import { describe, expect, it } from 'vitest';

import {
  getLocalizedPath,
  getPathForLanguage,
  SetLanguageUtils,
} from './language.utils';
import { setMockRouter } from '../test/mocks/next-router';

describe('language utils', () => {
  it.each([
    ['/en', 'en'],
    ['/en/cv', 'en'],
    ['/en/portfolio?from=home', 'en'],
    ['/portfolio#projects', 'pt'],
    ['/', 'pt'],
  ] as const)('detects %s as %s', (asPath, language) => {
    setMockRouter({ asPath });

    expect(SetLanguageUtils()).toBe(language);
  });

  it.each([
    ['/', 'pt', '/'],
    ['/cv', 'pt', '/cv'],
    ['/', 'en', '/en'],
    ['/cv', 'en', '/en/cv'],
  ] as const)('localizes %s for %s', (path, language, expectedPath) => {
    expect(getLocalizedPath(path, language)).toBe(expectedPath);
  });

  it.each([
    ['/', 'en', '/en'],
    ['/cv', 'en', '/en/cv'],
    ['/portfolio?from=home#projects', 'en', '/en/portfolio?from=home#projects'],
    ['?from=home#top', 'en', '/en?from=home#top'],
    ['/en', 'pt', '/'],
    ['/en/cv', 'pt', '/cv'],
    ['/en/portfolio?from=home#projects', 'pt', '/portfolio?from=home#projects'],
  ] as const)(
    'builds the route %s for %s',
    (asPath, language, expectedPath) => {
      expect(getPathForLanguage(asPath, language)).toBe(expectedPath);
    }
  );
});
