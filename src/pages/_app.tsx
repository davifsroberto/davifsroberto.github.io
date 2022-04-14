// TODO: Custom page 404

import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/global';
import { MoveToUp } from '../components/MoveToUp';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

function MyApp({ Component, pageProps }: AppProps) {
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
