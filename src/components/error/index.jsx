import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faTimes} size="5x" />
      <span className={styles.errorText}>Oh no, there was an error</span>
    </div>
  );
};

export default Error;
