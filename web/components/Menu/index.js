import Link from 'next/link';
import { useRef } from 'react';

import styles from './index.module.css';

const Menu = ({ pages, home }) => {
  const defaultImage = useRef();

  const handleMouseOver = () => {
    if (defaultImage.current) {
      defaultImage.current.style.opacity = 0;
    }
  };

  const handleMouseOut = () => {
    if (defaultImage.current) {
      defaultImage.current.style.opacity = 1;
    }
  };

  return (
    <>
      <div className={styles.menu}>
        <ul>
          {pages.map((page) => (
            <li
              className={styles.menuItem}
              key={page._id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Link href="[slug]" as={page.slug}>
                <a className={styles.menuLink}>{page.title}</a>
              </Link>
              {home && (
                <div className={styles.menuImage}>
                  <img src="/IMG_5555 1.png" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {home && (
        <div className={styles.defaultMenuImage} ref={defaultImage}>
          <img src="/DSCF4725 1.jpg" />
        </div>
      )}
    </>
  );
};

export default Menu;
