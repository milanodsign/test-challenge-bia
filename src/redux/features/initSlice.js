'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

export const InitSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
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

export const { setDarkMode } = InitSlice.actions;

export default InitSlice.reducer;
