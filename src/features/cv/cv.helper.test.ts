import { describe, expect, it } from 'vitest';

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
import experience from '../../locales/experience/index.json';
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

  it('maps experiences into a descending timeline', () => {
    setMockRouter({ asPath: '/experience', locale: 'pt' });

    const timeline = mountTimelineExperienceCvHelper();
    const expected = [...experience.pt.experiencies]
      .map((item) => ({
        id: item.id,
        title: item.title,
        subtitle: item.company.name,
        period: item.period,
        description: item.description,
      }))
      .sort((a, b) => b.id - a.id);

    expect(timeline).toEqual(expected);
  });
});
