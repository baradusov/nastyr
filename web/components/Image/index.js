import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import urlFor from '../../lib/urlFor';

import styles from './index.module.css';

const Image = ({ photo, ...restProps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const image = useRef();

  const showCaption = () => {
    setIsVisible(true);
  };

  const hideCaption = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      image.current.addEventListener('mousedown', hideCaption);
      document.addEventListener('mousedown', hideCaption);
      image.current.removeEventListener('mousedown', showCaption);
    } else {
      image.current.addEventListener('mousedown', showCaption);
      document.removeEventListener('mousedown', hideCaption);

      image.current.removeEventListener('mousedown', hideCaption);
    }

    return () => {
      if (image.current) {
        image.current.removeEventListener('mousedown', showCaption);
        document.removeEventListener('mousedown', hideCaption);
      }
    };
  }, [isVisible]);

  return (
    <div
      className={styles.galleryImageContainer}
      onMouseEnter={showCaption}
      onMouseLeave={hideCaption}
      ref={image}
    >
      <motion.img
        layout
        className={styles.galleryImage}
        src={urlFor(photo).url()}
        {...restProps}
      />
      {photo.caption && isVisible ? (
        <motion.p
          className={styles.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {photo.caption}
        </motion.p>
      ) : null}
    </div>
  );
};

export default Image;
