import Page from '../components/Page';
import styles from '../styles/Home.module.css';

import { getAllPages } from '../lib/api';

const Home = (props) => {
  const { pages } = props;
  return (
    <Page pages={pages}>
      <div className={styles.menuImage}>
        <img src="/DSCF4725 1.jpg" />
      </div>
    </Page>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPages();

  return {
    props: {
      pages: data,
    },
  };
};

export default Home;
