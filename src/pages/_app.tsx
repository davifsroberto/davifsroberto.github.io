import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';

import GlobalStyles from '../styles/global';
import { MoveToUp } from '../components/MoveToUp';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <ToastContainer />

      <MoveToUp />

      <GlobalStyles />
    </>
  );
}

export default MyApp;
