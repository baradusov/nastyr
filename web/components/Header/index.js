import styles from './index.module.css';

import Logo from '../Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
