import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CryptoCurrency} from '../../interfaces/CryptoCurrency';

export interface CryptoCurrencyState {
  cryptoCurrencies: CryptoCurrency[];
  isListEnding: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CryptoCurrencyState = {
  cryptoCurrencies: [],
  isListEnding: false,
  status: 'idle',
};

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
    setCryptoCurrencies: (state, action) => {
      state.cryptoCurrencies = action.payload;
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
      state.cryptoCurrencies = [...state.cryptoCurrencies, ...action.payload];
    });
    builder.addCase(fetchCryptoCurrency.rejected, state => {
      state.status = 'failed';
    });
  },
});

export const {setCryptoCurrencies} = cryptoCurrencySlice.actions;
