import { describe, expect, it, vi } from 'vitest';

import { event, GA_TRACKING_ID, pageview } from './gtag';
import { mockWindowGtag } from '../test/mocks/gtag';

describe('gtag', () => {
  it('does not throw when window is not available', () => {
    vi.stubGlobal('window', undefined);

    expect(() => pageview('/cv')).not.toThrow();
    expect(() =>
      event({
        action: 'download',
        category: 'cv',
        label: 'pdf',
        value: 1,
      })
    ).not.toThrow();

    vi.unstubAllGlobals();
  });

  it('does not throw when window.gtag is not available', () => {
    expect(() => pageview('/portfolio')).not.toThrow();
    expect(() =>
      event({
        action: 'open',
        category: 'portfolio',
        label: 'gallery',
        value: 1,
      })
    ).not.toThrow();
  });

  it('sends pageviews with the configured tracking id and page path', () => {
    const gtagMock = mockWindowGtag();

    pageview('/en/cv');

    expect(gtagMock).toHaveBeenCalledWith('config', GA_TRACKING_ID, {
      page_path: '/en/cv',
    });
  });

  it('sends analytics events with expected parameters', () => {
    const gtagMock = mockWindowGtag();

    event({
      action: 'submit',
      category: 'contact',
      label: 'form',
      value: 1,
    });

    expect(gtagMock).toHaveBeenCalledWith('event', 'submit', {
      event_category: 'contact',
      event_label: 'form',
      value: 1,
    });
  });
});
