import { describe, expect, it } from 'vitest';

import { getLocalizedPath, SetLanguageUtils } from './language.utils';
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
});
