import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import React, { type ReactNode } from 'react';
import { afterEach, vi } from 'vitest';

import { mockRouter, resetMockRouter } from './mocks/next-router';

type ChildrenProps = {
  children?: ReactNode;
};

vi.mock('next/router', () => ({
  useRouter: () => mockRouter,
  Router: {
    events: mockRouter.events,
  },
}));

vi.mock('next/head', () => ({
  default: ({ children }: ChildrenProps) =>
    React.createElement(React.Fragment, null, children),
}));

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: ChildrenProps & {
    href: string | { pathname?: string };
    [key: string]: unknown;
  }) => {
    const normalizedHref =
      typeof href === 'string' ? href : href.pathname || '';

    return React.createElement(
      'a',
      { href: normalizedHref, ...props },
      children
    );
  },
}));

vi.mock('next/image', () => ({
  default: ({
    src,
    alt = '',
    ...props
  }: {
    src: string | { src: string };
    alt?: string;
    [key: string]: unknown;
  }) => {
    Reflect.deleteProperty(props, 'fill');
    Reflect.deleteProperty(props, 'priority');
    Reflect.deleteProperty(props, 'sizes');

    return React.createElement('img', {
      src: typeof src === 'string' ? src : src.src,
      alt,
      ...props,
    });
  },
}));

vi.mock('next/script', () => ({
  default: ({ children, src, ...props }: ChildrenProps & { src?: string }) =>
    React.createElement('script', { src, ...props }, children),
}));

vi.mock('react-animation-on-scroll', () => ({
  AnimationOnScroll: ({ children }: ChildrenProps) =>
    React.createElement(React.Fragment, null, children),
}));

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
  ToastContainer: () => null,
}));

vi.mock('react-multi-carousel', () => ({
  default: ({ children }: ChildrenProps) =>
    React.createElement('section', null, children),
}));

vi.mock('axios', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ data: { status: 'ok', items: [] } })),
  },
}));

vi.mock('@emailjs/browser', () => ({
  send: vi.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

class ResizeObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

window.ResizeObserver = ResizeObserverMock;

afterEach(() => {
  cleanup();
  resetMockRouter();
  Reflect.deleteProperty(window, 'gtag');
  document.body.style.overflow = '';
  document.head.innerHTML = '';
  vi.clearAllMocks();
});
