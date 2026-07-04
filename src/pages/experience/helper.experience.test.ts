import { describe, expect, it } from 'vitest';

import { mountAllExperienceHelper } from './helper.experience';
import experience from '../../locales/experience/index.json';
import { setMockRouter } from '../../test/mocks/next-router';

describe('experience helper', () => {
  it.each([
    ['/experience', 'pt'],
    ['/en/experience', 'en'],
  ] as const)(
    'returns localized experience data for %s',
    (asPath, language) => {
      setMockRouter({ asPath, locale: language });

      expect(mountAllExperienceHelper()).toEqual(
        experience[language].experiencies
      );
    }
  );
});
