import { useEffect } from 'react';
import Head from 'next/head';
import { Router } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Router.events.on('routeChangeComplete', (url) => {
        ym(73542565, 'hit', url);
      });
    }

    return () => {
      Router.events.off('routeChangeComplete', (url) => {
        ym(73542565, 'hit', url);
      });
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
