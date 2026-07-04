import { describe, expect, it } from 'vitest';

import { defaultOgImage, seo, siteUrl } from './seo';

describe('seo data', () => {
  it('defines a valid site URL and default Open Graph image path', () => {
    expect(new URL(siteUrl).toString()).toBe(`${siteUrl}/`);
    expect(defaultOgImage).toMatch(/^\/assets\/images\/.+\.png$/);
  });

  it.each(Object.entries(seo))(
    'defines required SEO fields for %s in both languages',
    (_, pageSeo) => {
      expect(Object.keys(pageSeo)).toEqual(['pt', 'en']);

      expect(pageSeo.pt.title).toBeTruthy();
      expect(pageSeo.pt.description).toBeTruthy();
      expect(pageSeo.en.title).toBeTruthy();
      expect(pageSeo.en.description).toBeTruthy();
    }
  );
});
