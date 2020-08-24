import Head from 'next/head';
import styles from '../styles/Home.module.css';

import urlFor from '../lib/urlFor';
import { getPageBySlug, getAllPages } from '../lib/api';

const Home = ({ data, pages }) => {
  const { title, images } = data;
  return (
    <>
      <Head>
        <title>nastya razubaeva | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
          <a href="/">nastya razubaeva</a>
        </h1>
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

        <div className={styles.gallery}>
          {images.map((photo) => (
            <img className={styles.galleryImage} src={urlFor(photo).url()} key={photo._key}/>
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPageBySlug(params.slug);
  const allPages = await getAllPages();

  return {
    props: {
      data: data,
      pages: allPages,
    },
  };
};

export const getStaticPaths = async () => {
  const allPages = await getAllPages();

  return {
    paths: allPages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Home;
