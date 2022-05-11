import BlockContent from '@sanity/block-content-to-react';
import getYoutubeId from 'get-youtube-id';
import YouTube from 'react-youtube';

import { getPageBySlug, getContentPages, getMixes } from '../lib/api';
import Page from '../components/Page';
import Fancybox from '../components/Fancybox';
import Image from '../components/Image';
import styles from '../styles/Home.module.css';

const ContentPage = ({ data, pages }) => {
  const { title, images, description } = data;

  return (
    <Page pages={pages} title={title} isFixed>
      <Fancybox
        options={{
          Html: {
            video: {
              autoplay: false,
            },
          },
        }}
      >
        <div className={styles.gallery}>
          {images.map((content, key) => {
            if (content._type === 'textPost') {
              return (
                <div key={content._key} className={styles.textBlock}>
                  <div
                    id={`text-content-${content._key}`}
                    className="fancybox__content--text"
                    data-fancybox="gallery"
                    data-src={`#text-content-${content._key}`}
                    data-type="clone"
                  >
                    <BlockContent blocks={content.body} />
                  </div>
                </div>
              );
            }

            if (content._type === 'youtube') {
              const { url } = content;
              const id = getYoutubeId(url);

              return (
                <a data-fancybox="gallery" href={url}>
                  <YouTube
                    key={content._key}
                    className={styles.youtube}
                    containerClassName={styles.youtubeContainer}
                    videoId={id}
                    opts={{ width: 720, height: 480 }}
                  />
                </a>
              );
            }

            return (
              <Image
                key={content._key}
                photo={content}
                data-fancybox="gallery"
              />
            );
          })}
          {description && (
            <div className={styles.description}>
              <p className={styles.descriptionText}>{description}</p>
            </div>
          )}
          {/* чтобы после последней фотографии был отступ */}
          <div style={{ height: '100%', width: 1, flexShrink: 0 }}></div>
        </div>
      </Fancybox>
    </Page>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPageBySlug(params.slug);
  const mixesPage = await getMixes();
  const contentPages = await getContentPages();
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
  const contentPages = await getContentPages();

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
