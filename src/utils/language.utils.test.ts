import { describe, expect, it } from 'vitest';

import {
  getLanguageSwitchPath,
  getLocalizedPath,
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
    ['/en', 'pt', '/'],
    ['/en/', 'pt', '/'],
    ['/cv', 'en', '/en/cv'],
    ['/en/cv', 'pt', '/cv'],
    [
      '/portfolio/?from=home#projects',
      'en',
      '/en/portfolio/?from=home#projects',
    ],
    [
      '/en/portfolio/?from=home#projects',
      'pt',
      '/portfolio/?from=home#projects',
    ],
    ['/en?from=home#about', 'pt', '/?from=home#about'],
    ['/?from=home#about', 'en', '/en/?from=home#about'],
    ['/en/cv', 'en', '/en/cv'],
    ['/cv', 'pt', '/cv'],
    ['/english', 'en', '/en/english'],
  ] as const)('switches %s to %s', (path, language, expectedPath) => {
    expect(getLanguageSwitchPath(path, language)).toBe(expectedPath);
  });
});
