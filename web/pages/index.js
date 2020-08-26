import { getAllPages } from '../lib/api';

import Page from '../components/Page';

const Home = (props) => {
  const { pages } = props;

  return <Page pages={pages} home />;
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
