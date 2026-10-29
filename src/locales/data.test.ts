import { describe, expect, it } from 'vitest';

import socialMedia from './social-media/index.json';
import portfolio from './portfolio/index.json';
import experience from './experience/index.json';
import homeExperience from './home/experience/index.json';
import cv from './cv/index.json';

describe('critical locale data', () => {
  it('uses the current role consistently in both languages', () => {
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
      expect(cv[locale].carrer).toBe('Staff Software Engineer');
      expect(cv[locale].about.me.one).toContain('Staff Software Engineer');
      expect(cv[locale].about.me.paragraphs[0]).toContain(
        'Staff Software Engineer'
      );
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
});
