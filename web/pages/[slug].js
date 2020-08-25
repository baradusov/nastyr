import styles from '../styles/Home.module.css';

import urlFor from '../lib/urlFor';
import { getPageBySlug, getAllPages } from '../lib/api';
import Page from '../components/Page';

const Home = ({ data, pages }) => {
  const { title, images } = data;
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
