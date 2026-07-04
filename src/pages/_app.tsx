import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ToastContainer } from 'react-toastify';
import * as gtag from '../lib/gtag';
import { GA_TRACKING_ID } from '../lib/gtag';

import GlobalStyles from '../styles/global';
import { MoveToUp } from '../components/MoveToUp';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) =>
      isProduction && gtag.pageview(url);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <>
      {isProduction && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />

          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){window.dataLayer.push(arguments);}
              window.gtag('js', new Date());
              window.gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

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
