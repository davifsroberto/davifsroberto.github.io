import { describe, expect, it } from 'vitest';

import { mountMenuSecondaryHeaderUtils } from './header.utils';
import { setMockRouter } from '../test/mocks/next-router';

describe('header utils', () => {
  it('builds the secondary menu in Portuguese', () => {
    setMockRouter({ asPath: '/portfolio', locale: 'pt' });

    expect(mountMenuSecondaryHeaderUtils()).toEqual([
      { name: 'Home', link: '/' },
      {
        name: 'Contato',
        link: '#contact',
        className: ' fw-bold text-decoration-underline ',
      },
      { name: 'CV', link: '/cv' },
    ]);
  });

  it('builds the secondary menu in English', () => {
    setMockRouter({ asPath: '/en/portfolio', locale: 'en' });

    expect(mountMenuSecondaryHeaderUtils()).toEqual([
      { name: 'Home', link: '/en' },
      {
        name: 'Contact',
        link: '#contact',
        className: ' fw-bold text-decoration-underline ',
      },
      { name: 'CV', link: '/en/cv' },
    ]);
  });
});
