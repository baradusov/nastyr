import { useState, useRef, useEffect } from 'react';

import styles from './index.module.css';

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactsContainer = useRef();

  const handleClickOutside = (event) => {
    if (contactsContainer.current.contains(event.target)) {
      return;
    }

    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className={styles.contactsContainer} ref={contactsContainer}>
      <p className={styles.title} onClick={() => setIsVisible(!isVisible)}>
        contacts
      </p>
      {isVisible ? (
        <p className={styles.contacts}>
          hello!{' '}
          <span>
            my{' '}
            <a
              className={styles.link}
              href="https://www.instagram.com/nasty.rr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>{' '}
          </span>
          <span>
            and{' '}
            <a
              className={styles.link}
              href="https://t.me/nastyrr"
              target="_blank"
              rel="noopener noreferrer"
            >
              telegram
            </a>
          </span>
        </p>
      ) : null}
    </div>
  );
};

export default Contacts;
