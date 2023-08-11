import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import initSlice from './features/initSlice';
import { countriesAPI } from './services/countriesApi';

export const store = configureStore({
  reducer: {
    init: initSlice,
    [countriesAPI.reducerPath]: countriesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesAPI.middleware),
});

setupListeners(store.dispatch);
