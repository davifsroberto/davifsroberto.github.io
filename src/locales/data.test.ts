import { describe, expect, it } from 'vitest';

import socialMedia from './social-media/index.json';
import portfolio from './portfolio/index.json';
import experience from './experience/index.json';
import homeExperience from './home/experience/index.json';
import cv from './cv/index.json';
import profile from './profile/index.json';

describe('critical locale data', () => {
  it('distinguishes the professional profile from the HSystem role', () => {
    for (const locale of ['pt', 'en'] as const) {
      const currentExperience = experience[locale].experiencies.find(
        (item) => item.company.name === 'HSystem'
      );
      const homeCurrentExperience = homeExperience[locale].experiencesHome.find(
        (item) => item.company.name === 'HSystem'
      );

      expect(currentExperience?.title).toBe('Staff Software Engineer');
      expect(currentExperience?.description).toContain(
        'Staff Software Engineer'
      );
      expect(homeCurrentExperience?.title).toBe('Staff Software Engineer');
      expect(homeCurrentExperience?.description).toContain(
        'Staff Software Engineer'
      );
      expect(cv[locale].about.me.one.toLowerCase()).toContain(
        profile[locale].role.toLowerCase()
      );
      expect(cv[locale].about.me.paragraphs[0]).toBe(cv[locale].about.me.one);
    }
  });

  it('keeps compatible social media data for Portuguese and English', () => {
    expect(socialMedia.pt).toHaveLength(socialMedia.en.length);

    for (const links of [socialMedia.pt, socialMedia.en]) {
      links.forEach((link) => {
        expect(link.icon).toBeTruthy();
        expect(
          link.href.startsWith('mailto:') || new URL(link.href)
        ).toBeTruthy();
      });
    }
  });

  it('defines portfolio projects with required fields and images', () => {
    for (const localePortfolio of [
      portfolio.pt.portfolio,
      portfolio.en.portfolio,
    ]) {
      localePortfolio.forEach((project) => {
        expect(project.id).toBeGreaterThan(0);
        expect(project.titleBox).toBeTruthy();
        expect(project.bgBox).toMatch(/^\/assets\/images\/portfolio\//);
        expect(project.images.length).toBeGreaterThan(0);
        project.images.forEach((image) =>
          expect(image).toMatch(/^\/assets\/images\/portfolio\//)
        );
      });
    }
  });

  it('defines experiences with required company, period and description fields', () => {
    for (const localeExperience of [
      experience.pt.experiencies,
      experience.en.experiencies,
    ]) {
      localeExperience.forEach((item) => {
        expect(item.title).toBeTruthy();
        expect(item.period).toBeTruthy();
        expect(item.description).toBeTruthy();
        expect(item.company.name).toBeTruthy();
        expect(new URL(item.company.link).protocol).toMatch(/^https?:$/);
      });
    }
  });

  it('uses first-person descriptions for the updated experiences', () => {
    const expected = {
      pt: {
        'Fast Solutions': 'Analisei e desenvolvi',
        Cielo: 'Desenvolvi sistemas',
        'Banco BV': 'Desenvolvi aplicações',
      },
      en: {
        'Fast Solutions': 'I analyzed and developed',
        Cielo: 'I developed systems',
        Mottu: 'I develop applications',
        'Banco BV': 'I developed web applications',
      },
    };

    for (const locale of ['pt', 'en'] as const) {
      for (const [company, start] of Object.entries(expected[locale])) {
        const item = experience[locale].experiencies.find(
          (entry) => entry.company.name === company
        );
        expect(item?.description).toMatch(new RegExp(`^${start}`));
      }

      for (const company of ['Cielo', 'Banco BV'] as const) {
        const item = homeExperience[locale].experiencesHome.find(
          (entry) => entry.company.name === company
        );
        expect(item?.description).toMatch(
          new RegExp(`^${expected[locale][company]}`)
        );
      }
    }

    const mottu = experience.en.experiencies.find(
      (entry) => entry.company.name === 'Mottu'
    );
    expect(mottu?.description).toContain('I help less experienced developers');
    expect(mottu?.description).toContain('I create interfaces');
    expect(mottu?.description).toContain('I have notions of UI/UX');
  });
});
