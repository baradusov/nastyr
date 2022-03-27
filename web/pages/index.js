import { getContentPages, getMainPhoto } from '../lib/api';

import Page from '../components/Page';

const Home = (props) => {
  const { pages, mainPhoto } = props;

  return <Page pages={pages} home mainPhoto={mainPhoto} />;
};

export const getStaticProps = async () => {
  const mainPhoto = await getMainPhoto();
  const mixesPage = await getMixes();
  const contentPages = await getContentPages();
  const pages = {
    contentPages,
    mixesPage: mixesPage || null,
  };

  return {
    props: {
      pages: pages,
      mainPhoto: mainPhoto || null,
    },
  };
};

export default Home;
