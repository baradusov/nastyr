import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './index.module.css';

const MobileMenu = ({ pages, home }) => {
  const { contentPages, mixesPage } = pages;
  const allPages = [...contentPages, mixesPage];
  const [isVisible, setIsVisible] = useState(false);
  const { asPath } = useRouter();
  const [currentPage] = allPages.filter((page) => {
    if (page) {
      return asPath === `/${page.slug}`;
    }
  });

  const toggleMenu = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  return (
    <>
      {home ? (
        <div className={styles.menu}>
          <ul className={styles.menuList}>
            {contentPages.map((page) => (
              <li className={styles.menuItem} key={page._id}>
                <Link href="[slug]" as={page.slug}>
                  <a className={styles.menuLink}>{page.title}</a>
                </Link>
              </li>
            ))}
            {mixesPage && (
              <li className={styles.menuItem}>
                <Link href={mixesPage.slug}>
                  <a className={styles.menuLink} onClick={toggleMenu}>
                    {mixesPage.title}
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <div className={styles.secondMenuContainer}>
          <AnimatePresence>
            {isVisible ? null : (
              <motion.div
                onClick={toggleMenu}
                className={styles.secondMenu}
                key="menu-closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  width="30"
                  height="7"
                  fill="none"
                  fillOpacity=".4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#fff" />
                  <circle cx="14.7" cy="3.5" r="3.5" fill="#fff" />
                  <circle cx="25.9" cy="3.5" r="3.5" fill="#fff" />
                </svg>

                <p className={`${styles.menuLink} ${styles.isActive}`}>
                  {currentPage && currentPage.title}
                </p>
              </motion.div>
            )}

            {isVisible ? (
              <motion.div
                className={styles.secondMenuOverlay}
                onClick={() => setIsVisible(false)}
                key="menu-opened"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.secondMenuListContainer}>
                  <svg
                    width="30"
                    height="7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#fff" />
                    <circle cx="14.7" cy="3.5" r="3.5" fill="#fff" />
                    <circle cx="25.9" cy="3.5" r="3.5" fill="#fff" />
                  </svg>

                  <ul className={styles.menuList}>
                    {contentPages.map((page) => (
                      <li className={styles.menuItem} key={page._id}>
                        <Link href="[slug]" as={page.slug}>
                          <a className={styles.menuLink} onClick={toggleMenu}>
                            {page.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                    {mixesPage && (
                      <li className={styles.menuItem}>
                        <Link href={mixesPage.slug}>
                          <a className={styles.menuLink} onClick={toggleMenu}>
                            {mixesPage.title}
                          </a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
