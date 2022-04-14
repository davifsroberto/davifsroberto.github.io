// TODO: Custom page 404

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ToastContainer } from 'react-toastify';
import * as gtag from '../lib/gtag';

import GlobalStyles from '../styles/global';
import { MoveToUp } from '../components/MoveToUp';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => isProduction && gtag.pageview(url);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />

      <ToastContainer />

      <Contact />

      <Footer />

      <MoveToUp />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
