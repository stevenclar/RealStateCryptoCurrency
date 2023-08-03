import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CryptoCurrency} from '../../interfaces/CryptoCurrency';

export enum CurrencyStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

type status = 'idle' | 'loading' | 'failed';

export interface CryptoCurrencyState {
  cryptoCurrencies: CryptoCurrency[];
  selectedCurrency: CryptoCurrency | null;
  isListEnding: boolean;
  status: status;
}

const initialState: CryptoCurrencyState = {
  cryptoCurrencies: [],
  selectedCurrency: null,
  isListEnding: false,
  status: CurrencyStatus.IDLE,
};

//Send a request to get crypto currencies from the IoC container
export const fetchCryptoCurrency = createAsyncThunk(
  'cryptoCurrencies/fetchCryptoCurrency',
  async (getCryptoCurrencies: Promise<CryptoCurrency[]>) => {
    const data = await getCryptoCurrencies;
    return data;
  },
);

export const cryptoCurrencySlice = createSlice({
  name: 'cryptoCurrencies',
  initialState,
  reducers: {
    setCryptoCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCryptoCurrency.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchCryptoCurrency.fulfilled, (state, action) => {
      state.status = 'idle';
      if (action.payload.length === 0) {
        state.isListEnding = true;
        return;
      }
      state.cryptoCurrencies = [
        ...state.cryptoCurrencies,
        ...action.payload,
      ].sort(crypto => crypto.rank);
    });
    builder.addCase(fetchCryptoCurrency.rejected, state => {
      state.status = 'failed';
    });
  },
});

export const {setCryptoCurrency} = cryptoCurrencySlice.actions;
