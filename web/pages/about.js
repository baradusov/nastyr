import BlockContent from '@sanity/block-content-to-react';

import { getAboutPage, getContentPages, getMixes } from '../lib/api';
import Page from '../components/Page';

import styles from '../styles/About.module.css';

const AboutPage = ({ data, pages }) => {
  const { body, links } = data;

  return (
    <Page pages={pages}>
      <div className={styles.content}>
        <div className={styles.text}>
          <BlockContent blocks={body} />
        </div>

        <div className={styles.links}>
          <ul>
            {links.map((link) => {
              return (
                <li>
                  <a className={styles.link} href={link.url}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps = async () => {
  const data = await getAboutPage();
  const contentPages = await getContentPages();
  const mixesPage = await getMixes();
  const pages = {
    contentPages,
    mixesPage: mixesPage || null,
  };

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
      pages: pages,
    },
  };
};

export default AboutPage;
