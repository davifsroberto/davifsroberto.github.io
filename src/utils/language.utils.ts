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

export function getPathForLanguage(asPath: string, selectedLanguage: Language) {
  const [pathWithSearch, hash = ''] = asPath.split('#');
  const [rawPathname, search = ''] = pathWithSearch.split('?');
  const pathname = rawPathname || '/';

  const localizedPathname =
    selectedLanguage === 'en'
      ? getLocalizedPath(removeEnglishPathPrefix(pathname), selectedLanguage)
      : removeEnglishPathPrefix(pathname);

  const queryString = search ? `?${search}` : '';
  const hashString = hash ? `#${hash}` : '';

  return `${localizedPathname}${queryString}${hashString}`;
}

function removeEnglishPathPrefix(pathname: string) {
  if (pathname === '/en') {
    return '/';
  }

  if (pathname.startsWith('/en/')) {
    return pathname.slice(3);
  }

  return pathname;
}
