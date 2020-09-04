import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from './index.module.css';

const MobileMenu = ({ pages, home }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { asPath } = useRouter();
  const [currentPage] = pages.filter((page) => {
    return asPath === `/${page.slug}`;
  });

  const toggleMenu = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <>
      {home ? (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {pages.map((page) => (
              <li className={styles.menuItem} key={page._id}>
                <Link href="[slug]" as={page.slug}>
                  <a
                    className={`${styles.menuLink} ${
                      asPath === `/${page.slug}` ? styles.isActive : ''
                    }`}
                  >
                    {page.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.secondMenuContainer}>
          {isVisible ? null : (
            <div className={styles.secondMenu}>
              <p className={`${styles.menuLink} ${styles.isActive}`}>
                {currentPage.title}
              </p>
              <button className={styles.menuButton} onClick={toggleMenu}>
                <svg
                  width="40"
                  height="10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5" cy="5" r="5" fill="#fff" fillOpacity=".4" />
                  <circle cx="20" cy="5" r="5" fill="#fff" fillOpacity=".4" />
                  <circle cx="35" cy="5" r="5" fill="#fff" fillOpacity=".4" />
                </svg>
              </button>
            </div>
          )}

          {isVisible ? (
            <div className={styles.secondMenuOverlay}>
              <div className={styles.secondMenuListContainer}>
                <ul className={styles.menuList}>
                  {pages.map((page) => (
                    <li className={styles.menuItem} key={page._id}>
                      <Link href="[slug]" as={page.slug}>
                        <a
                          className={`${styles.menuLink} ${
                            asPath === `/${page.slug}` ? styles.isActive : ''
                          }`}
                        >
                          {page.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <button className={styles.menuButton} onClick={toggleMenu}>
                  <svg
                    width="40"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="5" r="5" fill="#fff" />
                  </svg>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
