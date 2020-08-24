import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { getAllPages } from '../lib/api';

const Home = (props) => {
  const { pages } = props;
  return (
    <>
      <Head>
        <title>nastya razubaeva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>nastya razubaeva</h1>
        <p className={styles.subtitle}>contacts</p>
      </header>

      <main className={styles.main}>
        <div className={styles.menu}>
          <ul>
            {pages.map((page) => (
              <li className={styles.menuItem} key={page._id}>
                <a className={styles.menuLink} href={page.slug}>
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.menuImage}>
          <img src="/DSCF4725 1.jpg" />
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPages();
  console.log(data);
  return {
    props: {
      pages: data,
    },
  };
};

export default Home;
