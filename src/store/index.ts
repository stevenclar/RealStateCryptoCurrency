import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {cryptoCurrencySlice} from './cryptoCurrency/cryptoCurrencySlice';

/**
 * Root reducer
 * @type {Reducer}
 * @description
 * Root reducer for the app
 */
const rootReducer = combineReducers({
  cryptoCurrencies: cryptoCurrencySlice.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
