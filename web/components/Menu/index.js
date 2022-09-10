import Link from 'next/link';
import { useRouter } from 'next/router';
import urlFor from '../../lib/urlFor';

import styles from './index.module.css';

const Menu = ({ pages, home, defaultImage, isFixed }) => {
  const { contentPages, mixesPage } = pages;
  const { asPath } = useRouter();
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

  const renderMenuImage = (page) => {
    if (home) {
      if (page.menuImage) {
        return (
          <div className={styles.menuImage}>
            <img src={urlFor(page.menuImage).url()} />
          </div>
        );
      }

      const menuImage = page.images.find(({ _type }) => _type === 'image');

      if (menuImage) {
        return (
          <div className={styles.menuImage}>
            <img src={urlFor(menuImage).url()} />
          </div>
        );
      }

      return null;
    }

    return null;
  };

  return (
    <div
      className={`${home ? styles.isHome : ''} ${styles.menu} ${
        isFixed ? styles.isFixed : ''
      }`}
    >
      <ul className={styles.menuList}>
        {contentPages.map((page) => {
          if (page.enabled) {
            return (
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
                {renderMenuImage(page)}
              </li>
            );
          }
        })}
        {mixesPage && (
          <li
            className={styles.menuItem}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <Link href={mixesPage.slug}>
              <a
                className={`${styles.menuLink} ${
                  asPath === `/${mixesPage.slug}` ? styles.isActive : ''
                }`}
              >
                {mixesPage.title}
              </a>
            </Link>
            {home && mixesPage.menuImage && (
              <div className={styles.menuImage}>
                <img src={urlFor(mixesPage.menuImage).url()} />
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
