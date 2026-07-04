import { describe, expect, it } from 'vitest';

import { mountSocialMediasUtils } from './social-medias.utils';

describe('component social media utils', () => {
  it('returns the expected static social media links', () => {
    expect(mountSocialMediasUtils()).toEqual([
      {
        href: 'https://www.linkedin.com/in/davifsroberto',
        icon: 'fa fa-linkedin',
        target: '_blank',
      },
      {
        href: 'https://github.com/davifsroberto',
        icon: 'fa fa-github',
        target: '_blank',
      },
      {
        href: 'https://api.whatsapp.com/send?phone=5511941619672&text=Ol%C3%A1%2C%20Davi%20Roberto%2C%20tudo%20bem%3F',
        icon: 'fa fa-whatsapp',
        target: '_blank',
      },
      {
        href: 'mailto:davifsroberto@outlook.com',
        icon: 'fa fa-envelope',
        target: '',
      },
    ]);
  });
});
