import { vi } from 'vitest';

export function mockWindowGtag() {
  const gtagMock = vi.fn();

  window.gtag = gtagMock;

  return gtagMock;
}

export function clearWindowGtag() {
  Reflect.deleteProperty(window, 'gtag');
}
