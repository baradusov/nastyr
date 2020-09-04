import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from './index.module.css';

const Menu = ({ pages, home, defaultImage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { asPath } = useRouter();
  const [currentPage] = pages.filter((page) => {
    return asPath === `/${page.slug}`;
  });

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

  const toggleMenu = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        {pages.map((page) => (
          <li
            className={styles.menuItem}
            key={page._id}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Link href="[slug]" as={page.slug}>
              <a
                className={`${styles.menuLink} ${
                  asPath === `/${page.slug}` ? styles.isActive : ''
                }`}
              >
                {page.title}
              </a>
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
  );
};

export default Menu;
