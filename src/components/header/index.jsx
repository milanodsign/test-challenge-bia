'use client';
import React from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { setDarkMode } from '@/redux/features/initSlice';
import Link from 'next/link';

const Header = () => {
  const { darkMode } = useSelector((store) => store.init);
  const dispatch = useDispatch();

  const handleDarkMode = (scheme) => {
    const link = document.getElementById('color-scheme');
    link.href = `${scheme}-theme.css`;
    dispatch(setDarkMode());
  };

  return (
    <div className={styles.headerContainer}>
      <Link href={'/'}>
        <span className={styles.headerTitle}>Where in the world?</span>
      </Link>
      <span className={styles.darkModeSwitch} onClick={() => handleDarkMode(!darkMode ? 'dark' : 'light')}>
        <FontAwesomeIcon icon={!darkMode ? faMoon : faSun} /> {!darkMode ? 'Dark' : 'Light'} Mode
      </span>
    </div>
  );
};

export default Header;
