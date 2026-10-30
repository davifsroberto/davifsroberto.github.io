import { describe, expect, it, vi } from 'vitest';

import {
  mountAboutItemsCvHelper,
  mountMenuCvHelper,
  mountSkillGroupsCvHelper,
  mountSkillLeftCvHelper,
  mountSkillRightCvHelper,
  mountTimelineEducationCvHelper,
  mountTimelineExperienceCvHelper,
} from './cv.helper';
import cv from '../../locales/cv/index.json';
import { experienceOrder } from '../../locales/cv-pdf/index.json';
import experience from '../../locales/experience/index.json';
import * as experienceHelper from '../experience/helper.experience';
import { setMockRouter } from '../../test/mocks/next-router';

describe('cv helper', () => {
  it('removes the current CV item from the secondary menu', () => {
    setMockRouter({ asPath: '/cv', locale: 'pt' });

    expect(mountMenuCvHelper()).toEqual([
      { name: 'Home', link: '/' },
      {
        name: 'Contato',
        link: '#contact',
        className: ' fw-bold text-decoration-underline ',
      },
    ]);
  });

  it.each([
    ['/cv', 'pt'],
    ['/en/cv', 'en'],
  ] as const)('returns localized CV data for %s', (asPath, language) => {
    setMockRouter({ asPath, locale: language });

    expect(mountAboutItemsCvHelper()).toEqual(cv[language].about.itens);
    expect(mountSkillGroupsCvHelper()).toEqual(cv[language].skills.groups);
    expect(mountSkillRightCvHelper()).toEqual(cv[language].skills.skillRight);
    expect(mountTimelineEducationCvHelper()).toEqual(
      cv[language].education.items
    );
  });

  it('returns the hardcoded left skills', () => {
    expect(mountSkillLeftCvHelper()).toEqual([
      { name: 'Angular', class: 'bg-primary', progress: 97 },
      { name: 'React', class: 'bg-primary', progress: 90 },
      { name: 'Node.js', class: 'bg-primary', progress: 80 },
    ]);
  });

  it.each([
    ['/cv', 'pt'],
    ['/en/cv', 'en'],
  ] as const)(
    'maps experiences for %s in the same order as the PDF',
    (asPath, language) => {
      setMockRouter({ asPath, locale: language });

      const timeline = mountTimelineExperienceCvHelper();
      const expected = [...experience[language].experiencies].map((item) => ({
        id: item.id,
        title: item.title,
        subtitle: item.company.name,
        period: item.period,
        description: item.description,
      }));

      expect(timeline.map((item) => item.id)).toEqual([
        11, 10, 9, 7, 6, 4, 3, 5, 2, 1,
      ]);
      expect(timeline).toHaveLength(expected.length);
      expect(timeline).toEqual(expect.arrayContaining(expected));
    }
  );

  it('rejects duplicate IDs in the PDF experience order', () => {
    const original = experienceOrder[1];
    experienceOrder[1] = experienceOrder[0];
    try {
      expect(() => mountTimelineExperienceCvHelper()).toThrow(
        'CV experience order must match the site experiences.'
      );
    } finally {
      experienceOrder[1] = original;
    }
  });

  it.each(['missing', 'duplicate', 'unknown'])(
    'rejects %s experience IDs',
    (invalid) => {
      const items = [...experience.pt.experiencies];
      if (invalid === 'missing') {
        items.pop();
      } else if (invalid === 'duplicate') {
        items[0] = items[1];
      } else {
        items[0] = { ...items[0], id: 999 };
      }

      const mocked = vi
        .spyOn(experienceHelper, 'mountAllExperienceHelper')
        .mockReturnValue(items);
      try {
        expect(() => mountTimelineExperienceCvHelper()).toThrow(
          'CV experience order must match the site experiences.'
        );
      } finally {
        mocked.mockRestore();
      }
    }
  );
});
