import { FIELDS } from '@/utils/const';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const countriesAPI = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1/',
  }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `${FIELDS}`,
    }),
    getCountry: builder.query({
      query: (name) => `name/${name}`,
    }),
    getCountriesByRegion: builder.query({
      query: (region) => `region/${region}`,
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryQuery, useGetCountriesByRegionQuery } = countriesAPI;
