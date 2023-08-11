'is client';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { formatNumber } from '@/utils/customFunctions';

const ContinerCountry = ({ data }) => {
  console.log(data);

  const dinamicKeyNativeName = (data) => {
    const _data = Object.keys(data);
    const dynamicKey = _data[0];
    return data[dynamicKey].common;
  };
  const dinamicKeyCurrencies = (data) => {
    const _data = Object.keys(data);
    const dynamicKey = _data[0];
    return data[dynamicKey].name;
  };

  const languages = data.languages !== null ? Object.keys(data.languages) : [];
  const borders = 'borders' in data ? Object.keys(data.borders) : [];

  return (
    <div className={styles.container}>
      <div className={styles.containerBtnBack}>
        <Link href="/">
          <button className={styles.btnBack}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
            Back
          </button>
        </Link>
      </div>
      <div className={styles.containerInfo}>
        <span className={styles.containerFlag}>
          <img src={data.flags.svg} alt="" />
        </span>
        <div className={styles.containerDataCountry}>
          <h1>{data.name.common}</h1>
          <span>
            <span>
              <span>
                Native Name: <span className={styles.data}>{dinamicKeyNativeName(data.name.nativeName)}</span>
              </span>
              <span>
                Population: <span className={styles.data}>{formatNumber(data.population)}</span>
              </span>
              <span>
                Region: <span className={styles.data}>{data.region}</span>
              </span>
              <span>
                Sub Region: <span className={styles.data}>{data.subregion}</span>
              </span>
              <span>
                Capital: <span className={styles.data}>{data.capital}</span>
              </span>
            </span>
            <span>
              <span>
                Top Level Domain: <span className={styles.data}>{data.tld}</span>
              </span>
              <span>
                Currencies: <span className={styles.data}>{dinamicKeyCurrencies(data.currencies)}</span>
              </span>
              <span>
                Languajes:{' '}
                <span className={styles.data}>
                  {languages.map((i) => (
                    <span key={i}>
                      {data.languages[i]}
                      <span>, </span>
                    </span>
                  ))}
                </span>
              </span>
            </span>
          </span>
          <span className={styles.borderCountries}>
            <span>Border Countries:</span>
            <span className={styles.data}>
              {borders?.map((i) => (
                <span key={i}>{data.borders[i]}</span>
              ))}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContinerCountry;
