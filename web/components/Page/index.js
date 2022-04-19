import Header from '../Header';
import Contacts from '../Contacts';
import MenuContainer from '../MenuContainer';

import styles from './index.module.css';

const Page = ({ pages, children, home, mainPhoto, isFixed }) => {
  return (
    <div className={styles.page}>
      <div className={`${styles.header} ${isFixed ? styles.isFixed : ''}`}>
        <Header />
      </div>

      <div className={styles.menu}>
        <MenuContainer
          pages={pages}
          home={home}
          isFixed
          mainPhoto={mainPhoto}
        />
      </div>

      <div className={styles.main}>
        <main>{children}</main>
      </div>

      {!isFixed && (
        <div className={styles.aside}>
          <aside>
            <Contacts />
          </aside>
        </div>
      )}
    </div>
  );
};

export default Page;
