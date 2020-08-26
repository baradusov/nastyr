import styles from './index.module.css';

import Logo from '../Logo';
import Contacts from '../Contacts';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Contacts />
    </header>
  );
};

export default Header;
