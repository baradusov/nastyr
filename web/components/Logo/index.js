import Link from 'next/link';
import styles from './index.module.css';

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <Link href="/">
        <a>nastya razubaeva</a>
      </Link>
    </h1>
  );
};

export default Logo;
