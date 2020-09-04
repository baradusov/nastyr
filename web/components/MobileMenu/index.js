import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <AnimatePresence>
            {isVisible ? null : (
              <motion.div
                className={styles.secondMenu}
                key="menu-closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className={`${styles.menuLink} ${styles.isActive}`}>
                  {currentPage && currentPage.title}
                </p>
                <button className={styles.menuButton} onClick={toggleMenu}>
                  <motion.svg
                    width="40"
                    height="10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.circle
                      cx="5"
                      cy="5"
                      r="5"
                      fill="#fff"
                      fillOpacity=".4"
                      initial={{ x: 30 }}
                      animate={{ x: 0 }}
                      exit={{ x: 30 }}
                      transition={{ delay: 0.05 }}
                    />
                    <motion.circle
                      cx="20"
                      cy="5"
                      r="5"
                      fill="#fff"
                      fillOpacity=".4"
                      initial={{ x: 15 }}
                      animate={{ x: 0 }}
                      exit={{ x: 15 }}
                    />
                    <circle cx="35" cy="5" r="5" fill="#fff" fillOpacity=".4" />
                  </motion.svg>
                </button>
              </motion.div>
            )}

            {isVisible ? (
              <motion.div
                className={styles.secondMenuOverlay}
                key="menu-opened"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
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
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
