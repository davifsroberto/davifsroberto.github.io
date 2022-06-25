import { SocialMediaType } from '../types/social-media.type';

export function mountSocialMediasUtils(): SocialMediaType[] {
  return [
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
      href: 'https://api.whatsapp.com/send?phone=5511953566668&text=Ol%C3%A1%2C+Davi+Roberto.',
      icon: 'fa fa-whatsapp',
      target: '_blank',
    },
    {
      href: 'mailto:davifsroberto@outlook.com',
      icon: 'fa fa-envelope',
      target: '',
    },
  ];
}
