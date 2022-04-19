import { useRef } from 'react';
import urlFor from '../../lib/urlFor';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';

import styles from './index.module.css';

const MenuContainer = ({ pages, home, mainPhoto }) => {
  const defaultImage = useRef();

  const renderDefaultMenuImage = () => {
    if (home && mainPhoto && mainPhoto.photo) {
      return (
        <div className={styles.defaultMenuImage} ref={defaultImage}>
          <img src={urlFor(mainPhoto.photo).url()} />
        </div>
      );
    }
  };

  return (
    <div className={`${styles.menuContainer} ${home ? styles.isHome : ''}`}>
      <Menu defaultImage={defaultImage} pages={pages} home={home} isFixed />
      <MobileMenu defaultImage={defaultImage} pages={pages} home={home} />

      {renderDefaultMenuImage()}
    </div>
  );
};

export default MenuContainer;
