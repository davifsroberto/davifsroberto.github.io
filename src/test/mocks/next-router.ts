import { vi } from 'vitest';

type RouterEvents = {
  on: ReturnType<typeof vi.fn>;
  off: ReturnType<typeof vi.fn>;
  emit: ReturnType<typeof vi.fn>;
};

type TestRouter = {
  asPath: string;
  pathname: string;
  route: string;
  query: Record<string, string>;
  locale: 'pt' | 'en';
  locales: Array<'pt' | 'en'>;
  defaultLocale: 'pt';
  events: RouterEvents;
  push: ReturnType<typeof vi.fn>;
  replace: ReturnType<typeof vi.fn>;
  prefetch: ReturnType<typeof vi.fn>;
  back: ReturnType<typeof vi.fn>;
  reload: ReturnType<typeof vi.fn>;
  beforePopState: ReturnType<typeof vi.fn>;
  isFallback: boolean;
  isReady: boolean;
};

export const routerPushMock = vi.fn();
export const routerReplaceMock = vi.fn();
export const routerPrefetchMock = vi.fn();
export const routerBackMock = vi.fn();
export const routerReloadMock = vi.fn();
export const routerBeforePopStateMock = vi.fn();
export const routerEventsOnMock = vi.fn();
export const routerEventsOffMock = vi.fn();
export const routerEventsEmitMock = vi.fn();

export const mockRouter: TestRouter = {
  asPath: '/',
  pathname: '/',
  route: '/',
  query: {},
  locale: 'pt',
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  events: {
    on: routerEventsOnMock,
    off: routerEventsOffMock,
    emit: routerEventsEmitMock,
  },
  push: routerPushMock,
  replace: routerReplaceMock,
  prefetch: routerPrefetchMock,
  back: routerBackMock,
  reload: routerReloadMock,
  beforePopState: routerBeforePopStateMock,
  isFallback: false,
  isReady: true,
};

export function setMockRouter(overrides: Partial<TestRouter> = {}): TestRouter {
  Object.assign(mockRouter, {
    asPath: '/',
    pathname: '/',
    route: '/',
    query: {},
    locale: 'pt',
    ...overrides,
  });

  return mockRouter;
}

export function resetMockRouter(): TestRouter {
  return setMockRouter();
}
