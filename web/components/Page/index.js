import Head from 'next/head';

import styles from './index.module.css';
import Header from '../Header';
import Menu from '../Menu';

const Page = ({ pages, children, title, home }) => {
  return (
    <>
      <Head>
        <title>
          {title ? `nastya razubaeva | ${title}` : 'nastya razubaeva'}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <Header />

      <main className={styles.main}>
        <Menu pages={pages} home={home} />

        {children}
      </main>
    </>
  );
};

export default Page;
