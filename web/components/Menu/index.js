import Link from 'next/link';
import { useRouter } from 'next/router';
import urlFor from '../../lib/urlFor';

import styles from './index.module.css';

const Menu = ({ pages, home, defaultImage }) => {
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

  return (
    <div className={`${home ? styles.isHome : ''} ${styles.menu}`}>
      <ul className={styles.menuList}>
        {contentPages.map((page) => (
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
                <img
                  src={urlFor(page.menuImage || page.images)
                    .height(320)
                    .url()}
                />
              </div>
            )}
          </li>
        ))}
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
                <img src={urlFor(mixesPage.menuImage).height(320).url()} />
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
