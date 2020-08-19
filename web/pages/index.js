import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
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
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="/">
                dacha 2020
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="/">
                italy’2020
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="/">
                ambar vintage
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="/">
                friends
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="/">
                web journal
              </a>
            </li>
            <li className={styles.menuItem}>
              <a className={styles.menuLink} href="/">
                about my cat
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.menuImage}>
          <img src="/DSCF4725 1.jpg" />
        </div>
      </main>
    </>
  );
}
