import { useEffect } from 'react';
import Head from 'next/head';
import { Router } from 'next/router';
import Script from 'next/script';

import '../styles/globals.css';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (isProduction) {
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
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>
          {title ? `Anastasia Razubaeva | ${title}` : 'Anastasia Razubaeva'}
        </title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />

      {isProduction ? (
        <>
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/73542565"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>
          <Script id="metrika">{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(73542565, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`}</Script>
        </>
      ) : null}
    </>
  );
}

export default MyApp;
