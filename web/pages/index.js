import { getContentPages, getMixes, getMainPhoto } from '../lib/api';

import Page from '../components/Page';

const pageComponents = {
  photo: (props) => <>photos</>,
  text: (props) => <>text</>,
};

const getContent = (type, props) => {
  if (!type) return null;

  return pageComponents[type];
};

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
