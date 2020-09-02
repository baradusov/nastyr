import { useRef } from 'react';

import Menu from '../Menu';

import styles from './index.module.css';

const MenuContainer = ({ pages, home }) => {
  const defaultImage = useRef();

  return (
    <div className={styles.menuContainer}>
      <Menu defaultImage={defaultImage} pages={pages} home={home} />

      {home && (
        <div className={styles.defaultMenuImage} ref={defaultImage}>
          <img src="/DSCF4725 1.jpg" />
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
