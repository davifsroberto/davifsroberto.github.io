import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <ToastContainer />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
