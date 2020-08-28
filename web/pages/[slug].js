import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

import urlFor from '../lib/urlFor';
import { getPageBySlug, getAllPages } from '../lib/api';

import Page from '../components/Page';

const Home = ({ data, pages }) => {
  const { title, images } = data;

  // const handleHorizontalPageScroll = (event) => {
  //   if (event.deltaY > 0) {
  //     window.scrollBy({ top: 0, left: 25, behavior: 'auto' });
  //   } else {
  //     window.scrollBy({ top: 0, left: -25, behavior: 'auto' });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('wheel', handleHorizontalPageScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleHorizontalPageScroll);
  //   };
  // }, []);

  return (
    <Page pages={pages} title={title}>
      <div className={styles.gallery}>
        {images.map((photo) => (
          <img
            className={styles.galleryImage}
            src={urlFor(photo).url()}
            key={photo._key}
          />
        ))}
      </div>
    </Page>
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
