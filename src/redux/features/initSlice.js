'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
  dataCountries: [],
  singleData: [],
};

export const InitSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    setDataCountries: (state, action) => {
      state.dataCountries = action.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setSingleData: (state, action) => {
      state.singleData = action.payload;
    },
  },
});

export const fetchGetCountriesByRegion = (region) => (dispatch) => {
  try {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => response.json)
      .then((result) => dispatch(setDataCountries(result)));
  } catch (error) {
    (error) => error.log(error);
  }
};

export const { setDarkMode, setDataCountries } = InitSlice.actions;

export default InitSlice.reducer;
