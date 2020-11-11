import Image from '../components/Image';
import styles from '../styles/Home.module.css';

import { getPageBySlug, getcontentPages, getMixes } from '../lib/api';

import Page from '../components/Page';

const Home = ({ data, pages }) => {
  const { title, images, description } = data;

  return (
    <Page pages={pages} title={title}>
      <div className={styles.gallery}>
        {images.map((photo) => (
          <Image key={photo._key} photo={photo} />
        ))}
        {description && (
          <div className={styles.description}>
            <p className={styles.descriptionText}>{description}</p>
          </div>
        )}
        {/* чтобы после последней фотографии был отступ */}
        <div style={{ height: '100%', width: 1, flexShrink: 0 }}></div>
      </div>
    </Page>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPageBySlug(params.slug);
  const mixesPage = await getMixes();
  const contentPages = await getcontentPages();
  const pages = {
    contentPages,
    mixesPage,
  };

  return {
    props: {
      data: data,
      pages: pages,
    },
  };
};

export const getStaticPaths = async () => {
  const contentPages = await getcontentPages();

  return {
    paths: contentPages.map((page) => {
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
