import Link from 'next/link';

import styles from './index.module.css';

const Contacts = () => {
  return (
    <Link href="/about">
      <a className={styles.link}>about / contacts</a>
    </Link>
  );
};

export default Contacts;
