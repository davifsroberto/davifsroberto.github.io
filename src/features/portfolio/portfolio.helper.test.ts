import { describe, expect, it } from 'vitest';

import { mountPortfolioHelper } from './portfolio.helper';
import portfolio from '../../locales/portfolio/index.json';
import { setMockRouter } from '../../test/mocks/next-router';

describe('portfolio helper', () => {
  it.each([
    ['/portfolio', 'pt'],
    ['/en/portfolio', 'en'],
  ] as const)('returns localized portfolio data for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountPortfolioHelper()).toEqual(portfolio[language].portfolio);
  });
});
