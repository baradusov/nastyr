import { getcontentPages, getMainPhoto, getMixes } from '../lib/api';

import Page from '../components/Page';

const Home = (props) => {
  const { pages, mainPhoto } = props;

  return <Page pages={pages} home mainPhoto={mainPhoto} />;
};

export const getStaticProps = async () => {
  const mainPhoto = await getMainPhoto();
  const mixesPage = await getMixes();
  const contentPages = await getcontentPages();
  const pages = {
    contentPages,
    mixesPage: mixesPage || null,
  };

  return {
    props: {
      pages: pages,
      mainPhoto: mainPhoto,
    },
  };
};

export default Home;
