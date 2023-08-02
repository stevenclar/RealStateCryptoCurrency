import {configureStore} from '@reduxjs/toolkit';
import {cryptoCurrencySlice} from './cryptoCurrency/cryptoCurrencySlice';
// ...

export const store = configureStore({
  reducer: {
    cryptoCurrencies: cryptoCurrencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
