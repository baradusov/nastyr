import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import styles from './index.module.css';

const Page = (props) => {
  const { pages, children, title } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Head>
        <title>
          {title ? `nastya razubaeva | ${title}` : 'nastya razubaeva'}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>nastya razubaeva</a>
          </Link>
        </h1>
        <div className={styles.contactsContainer}>
          <p
            className={styles.text}
            onClick={() => setIsVisible(!isVisible)}
          >
            contacts
          </p>
          {isVisible ? (
            <p className={styles.contacts}>hello! my instagram and telegram</p>
          ) : null}
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.menu}>
          <ul>
            {pages.map((page) => (
              <li className={styles.menuItem} key={page._id}>
                <Link href="[slug]" as={page.slug}>
                  <a className={styles.menuLink}>{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {children}
      </main>
    </>
  );
};

export default Page;
