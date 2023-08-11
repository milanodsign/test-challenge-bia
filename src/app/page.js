'use client';
import styles from './page.module.css';
import Header from '@/components/header';
import PageContainer from '@/components/containerCountries';

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <PageContainer />
    </main>
  );
};

export default Home;
