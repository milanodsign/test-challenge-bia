import React from 'react';
import styles from './styles.module.css';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};

export default Loading;
