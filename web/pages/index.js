import { getAllPages, getMainPhoto } from '../lib/api';

import Page from '../components/Page';

const Home = (props) => {
  const { pages, mainPhoto } = props;

  return <Page pages={pages} home mainPhoto={mainPhoto} />;
};

export const getStaticProps = async () => {
  const data = await getAllPages();
  const mainPhoto = await getMainPhoto();

  return {
    props: {
      pages: data,
      mainPhoto: mainPhoto,
    },
  };
};

export default Home;
