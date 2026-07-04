import { describe, expect, it } from 'vitest';

import { mountTestimonialsHelper } from './recommendations.helper';
import recommendations from '../../locales/home/recommendations/index.json';
import { setMockRouter } from '../../test/mocks/next-router';

describe('recommendations helper', () => {
  it.each([
    ['/', 'pt'],
    ['/en', 'en'],
  ] as const)('returns localized testimonials for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountTestimonialsHelper()).toEqual(
      recommendations[language].recommendations
    );
  });
});
