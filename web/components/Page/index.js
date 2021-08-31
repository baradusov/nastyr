import Head from 'next/head';

import styles from './index.module.css';
import Header from '../Header';
import MenuContainer from '../MenuContainer';

const Page = ({ pages, children, title, home, mainPhoto }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `anastasia razubaeva | ${title}` : 'anastasia razubaeva'}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
   ym(73542565, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`,
          }}
        ></script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/73542565"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </Head>

      <Header />

      <main className={styles.main}>
        <MenuContainer pages={pages} home={home} mainPhoto={mainPhoto} />

        {children}
      </main>
    </>
  );
};

export default Page;
