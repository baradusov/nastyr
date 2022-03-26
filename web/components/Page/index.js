import styles from './index.module.css';
import Header from '../Header';
import MenuContainer from '../MenuContainer';

const Page = ({ pages, children, title, home, mainPhoto }) => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <MenuContainer pages={pages} home={home} mainPhoto={mainPhoto} />

        {children}
      </main>
    </>
  );
};

export default Page;
