import MixcloudEmbed from '../components/MixcloudEmbed';
import styles from '../styles/Mixes.module.css';

import { getMixes, getcontentPages } from '../lib/api';

import Page from '../components/Page';

const Home = ({ data, pages }) => {
  return (
    <Page pages={pages} title={'mixes'}>
      <div className={styles.mixes}>
        {data.map(({ url, _key }) => (
          <div className={styles.embed} key={_key}>
            <MixcloudEmbed url={url} />
          </div>
        ))}
        <div className={styles.stub}></div>
      </div>
    </Page>
  );
};

export const getStaticProps = async () => {
  const mixesPage = await getMixes();
  const contentPages = await getcontentPages();
  const pages = {
    contentPages,
    mixesPage: mixesPage || null,
  };

  if (!mixesPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: mixesPage ? mixesPage.mixes : [],
      pages: pages,
    },
  };
};

export default Home;
