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
                  <a className={styles.menuLink}>{page.title}</a>
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
                onClick={toggleMenu}
                className={styles.secondMenu}
                key="menu-closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.svg
                  width="21"
                  height="5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2.5"
                    cy="2.5"
                    r="2.5"
                    fill="#fff"
                    fillOpacity=".4"
                  />
                  <motion.circle
                    cx="10.5"
                    cy="2.5"
                    r="2.5"
                    fill="#fff"
                    fillOpacity=".4"
                    initial={{ x: -10.5 }}
                    animate={{ x: 0 }}
                    exit={{ x: -10.5 }}
                  />
                  <motion.circle
                    cx="18.5"
                    cy="2.5"
                    r="2.5"
                    fill="#fff"
                    fillOpacity=".4"
                    initial={{ x: -18.5 }}
                    animate={{ x: 0 }}
                    exit={{ x: -18.5 }}
                    transition={{ ease: 'easeOut' }}
                  />
                </motion.svg>

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
                    style={{ display: 'block' }}
                    width="5"
                    height="5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#fff" />
                  </svg>

                  <ul className={styles.menuList}>
                    {pages.map((page) => (
                      <li className={styles.menuItem} key={page._id}>
                        <Link href="[slug]" as={page.slug}>
                          <a className={styles.menuLink} onClick={toggleMenu}>
                            {page.title}
                          </a>
                        </Link>
                      </li>
                    ))}
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
