'use client';
import Error from '@/components/error';
import Header from '@/components/header';
import Loading from '@/components/loading';
import { useGetCountryQuery } from '@/redux/services/countriesApi';
import styles from './page.module.css';
import ContinerCountry from '@/components/containerCountry';

const Country = ({ params }) => {
  const { country } = params;

  const { data, error, isLoading } = useGetCountryQuery(country);
  return (
    <main className={styles.main}>
      <Header />
      {error ? <Error /> : isLoading ? <Loading /> : data ? <ContinerCountry data={data[0]} /> : null}
    </main>
  );
};

export default Country;
