import { useRouter } from 'next/router';

export type Language = 'pt' | 'en';

export function SetLanguageUtils(): Language {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0];

  return path === '/en' || path.startsWith('/en/') ? 'en' : 'pt';
}

export function getLocalizedPath(path: string, selectedLanguage: Language) {
  if (selectedLanguage !== 'en') {
    return path;
  }

  return path === '/' ? '/en' : `/en${path}`;
}
