import React, { useState } from 'react';
import styles from './styles.module.css';
import Cards from '../cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { REGIONS } from '@/utils/const';
import {
  useGetAllCountriesQuery,
  useGetCountriesByRegionQuery,
  useGetCountryQuery,
} from '@/redux/services/countriesApi';
import Loading from '../loading';
import Error from '../error';

const ContainerCountries = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [country, setCountry] = useState('');

  const { data: allCountries, isLoading: isLoadingAllCountries } = useGetAllCountriesQuery(null);
  const { data: countriesByRegion, isLoading: isLoadingByRegion } = useGetCountriesByRegionQuery(selectedRegion);
  const { data: countryByText, isLoading: isLoadingCountryByText } = useGetCountryQuery(selectedCountry);

  const handleOpenSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const handleGetCountriesByRegion = (region) => {
    const elmt = document.getElementById('selectOption');
    elmt.innerHTML = region;
    setSelectedRegion(region);
    handleOpenSelect();
  };

  const handleSearchCountry = async (e) => {
    e.preventDefault();
    if (country === '') {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  const chargeFullData = (sting) => {
    const elmt = document.getElementById('selectOption');
    elmt.innerHTML = sting;
    setSelectedRegion(null);
    handleOpenSelect();
  };

  return (
    <div className={styles.container}>
      {isLoadingAllCountries || isLoadingByRegion ? (
        <Loading />
      ) : (
        <>
          <div className={styles.containerInputs}>
            <form onSubmit={(e) => handleSearchCountry(e)}>
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                placeholder="Search for a country..."
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value), handleSearchCountry(e);
                }}
              />
            </form>
            <span>
              <span className={styles.selectCustom} onClick={handleOpenSelect}>
                <span id="selectOption">Select by region</span>
                <span className={styles.chevronDown}>
                  <FontAwesomeIcon icon={isOpenSelect ? faChevronUp : faChevronDown} />
                </span>
              </span>
              <span className={isOpenSelect ? styles.selectCustomOptionsActive : styles.selectCustomOptions}>
                <span onClick={() => chargeFullData('Select by region')}>Select by region</span>
                {REGIONS.map((item) => (
                  <span key={item} onClick={() => handleGetCountriesByRegion(item)}>
                    {item}
                  </span>
                ))}
              </span>
            </span>
          </div>
          <div className={styles.containerCards}>
            {(selectedCountry !== null
              ? countryByText // Wrap in an array to render a single item
              : selectedRegion
              ? countriesByRegion
              : allCountries
            )?.map((item, i) => (
              <Cards key={i} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ContainerCountries;
