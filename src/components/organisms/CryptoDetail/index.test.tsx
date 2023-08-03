import React from 'react';
import CryptoDetail from '../CryptoDetail';
import {renderWithProviders} from '../../../../jest/test-utils';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';
import {CurrencyStatus} from '../../../store/cryptoCurrency/cryptoCurrencySlice';

describe('CryptoDetail Component', () => {
  const cryptoCurrencyMock: CryptoCurrency = {
    id: '1',
    abbreviation: 'BTC',
    name: 'Bitcoin',
    price: 50000,
    lastHourChange: 1.5,
    historicalData: [],
    rank: 0,
  };

  const preloadedState = {
    cryptoCurrencies: {
      selectedCurrency: cryptoCurrencyMock,
      cryptoCurrencies: [],
      isListEnding: false,
      status: CurrencyStatus.IDLE,
    },
  };

  it('should render without crashing', () => {
    const {getByTestId} = renderWithProviders(<CryptoDetail />, {
      preloadedState,
    });
    const cryptoDetail = getByTestId('crypto-detail');
    expect(cryptoDetail).toBeTruthy();
  });

  it('should display the correct information', () => {
    const {getByText} = renderWithProviders(<CryptoDetail />, {
      preloadedState,
    });

    const abbreviationText = getByText('BTC');
    const nameText = getByText('Bitcoin');
    const priceText = getByText('$50,000.00 USD');

    expect(abbreviationText).toBeTruthy();
    expect(nameText).toBeTruthy();
    expect(priceText).toBeTruthy();
  });

  it('should display historical data chart if available', () => {
    const {getByTestId} = renderWithProviders(<CryptoDetail />, {
      preloadedState: {
        ...preloadedState,
        cryptoCurrencies: {
          ...preloadedState.cryptoCurrencies,
          selectedCurrency: {
            ...preloadedState.cryptoCurrencies.selectedCurrency,
            historicalData: [1, 2, 3],
          },
        },
      },
    });

    const historicalChart = getByTestId('historical-chart');

    expect(historicalChart).toBeTruthy();
  });

  it('should not display historical data chart if historical data is empty', () => {
    const {queryByTestId} = renderWithProviders(<CryptoDetail />);

    const historicalChart = queryByTestId('historical-chart');

    expect(historicalChart).toBeNull();
  });

  it('should handle null or undefined crypto data', () => {
    const {getByTestId} = renderWithProviders(<CryptoDetail />);

    const abbreviationText = getByTestId('abbreviation-text');
    const nameText = getByTestId('name-text');
    const priceText = getByTestId('price-text');

    expect(abbreviationText).toHaveTextContent('N/A');
    expect(nameText).toHaveTextContent('N/A');
    expect(priceText).toHaveTextContent('N/A');
  });
});
