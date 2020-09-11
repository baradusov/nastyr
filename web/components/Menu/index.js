import Link from 'next/link';
import { useRouter } from 'next/router';
import urlFor from '../../lib/urlFor';

import styles from './index.module.css';

const Menu = ({ pages, home, defaultImage }) => {
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
                <img
                  src={urlFor(page.menuImage || page.images)
                    .height(320)
                    .url()}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
