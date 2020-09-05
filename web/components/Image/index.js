import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import urlFor from '../../lib/urlFor';

import styles from './index.module.css';

const Image = ({ photo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showCaption = () => {
    setIsVisible(true);
  };

  const hideCaption = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={styles.galleryImageContainer}
      onMouseEnter={showCaption}
      onMouseLeave={hideCaption}
    >
      <motion.img
        className={styles.galleryImage}
        src={urlFor(photo).url()}
        layout
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
