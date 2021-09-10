import BlockContent from '@sanity/block-content-to-react';
import getYoutubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import Image from '../components/Image';
import styles from '../styles/Home.module.css';

import { getPageBySlug, getcontentPages, getMixes } from '../lib/api';

import Page from '../components/Page';

const ContentPage = ({ data, pages }) => {
  const { title, images, description } = data;

  return (
    <Page pages={pages} title={title}>
      <div className={styles.gallery}>
        {images.map((content) => {
          if (content._type === 'textPost') {
            return (
              <div className={styles.textBlock}>
                <BlockContent key={content._key} blocks={content.body} />
              </div>
            );
          }

          if (content._type === 'youtube') {
            const { url } = content;
            const id = getYoutubeId(url);

            return (
              <YouTube
                key={content._key}
                className={styles.youtube}
                containerClassName={styles.youtubeContainer}
                videoId={id}
              />
            );
          }

          return <Image key={content._key} photo={content} />;
        })}
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
    mixesPage: mixesPage || null,
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

export default ContentPage;
