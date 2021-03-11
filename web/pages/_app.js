import { useEffect } from 'react';
import { Router } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Router.events.on('routeChangeComplete', (url) => {
        console.log(url);
        ym(73537873, 'hit', url);
      });
    }

    return () => {
      Router.events.off('routeChangeComplete', (url) => {
        console.log(url);
        ym(73537873, 'hit', url);
      });
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
