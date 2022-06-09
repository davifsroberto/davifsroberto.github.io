import { useRouter } from 'next/router';

export function SetLanguageUtils() {
  const router = useRouter();

  return router.locale === 'pt' ? 'pt' : 'en';
}
