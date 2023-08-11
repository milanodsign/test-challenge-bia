'is client';
import React from 'react';
import styles from './styles.module.css';
import { formatNumber } from '@/utils/customFunctions';
import Link from 'next/link';

const Cards = ({ item }) => {
  const handleSingleCountry = (name) => {};
  return (
    <Link href={`/${item.name.common}`}>
      <div className={styles.card} title={item.name.common} onClick={() => handleSingleCountry(item.name.common)}>
        <div className={styles.flagImage}>
          <img src={item.flags.png} alt="" />
        </div>
        <div className={styles.infoCountry}>
          <span className={styles.name}>{item.name.common}</span>
          <span className={styles.population}>
            Population: <span>{formatNumber(item.population)}</span>{' '}
          </span>
          <span className={styles.region}>
            Region: <span>{item.region}</span>{' '}
          </span>
          <span className={styles.capital}>
            Capital: <span>{item.capital}</span>{' '}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
