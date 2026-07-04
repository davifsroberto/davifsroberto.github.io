import { describe, expect, it } from 'vitest';

import { mountSkillAboutHelper } from './skill.helper';
import about from '../../locales/home/about/index.json';
import { setMockRouter } from '../../test/mocks/next-router';

describe('skill helper', () => {
  it.each([
    ['/', 'pt'],
    ['/en', 'en'],
  ] as const)('returns localized skills for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountSkillAboutHelper()).toEqual(about[language].skills);
  });
});
