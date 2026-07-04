import { describe, expect, it } from 'vitest';

import {
  mountExperienceHomeHelper,
  mountPortfolioHomeHelper,
} from './home.helper';
import experience from '../../locales/home/experience/index.json';
import portfolio from '../../locales/home/portfolio/index.json';
import { setMockRouter } from '../../test/mocks/next-router';

describe('home helpers', () => {
  it.each([
    ['/', 'pt'],
    ['/en', 'en'],
  ] as const)('returns home experience data for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountExperienceHomeHelper()).toEqual(
      experience[language].experiencesHome
    );
  });

  it.each([
    ['/', 'pt'],
    ['/en', 'en'],
  ] as const)('returns home portfolio data for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountPortfolioHomeHelper()).toEqual(
      portfolio[language].portfolioHome
    );
  });
});
