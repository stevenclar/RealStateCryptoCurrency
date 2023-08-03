import React from 'react';
import {renderWithProviders} from '../../../../jest/test-utils';
import CryptoList from '.';
import {CurrencyStatus} from '../../../store/cryptoCurrency/cryptoCurrencySlice';
import {fireEvent} from '@testing-library/react-native';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const loadMoreMock = jest.fn();

jest.useFakeTimers();

describe('CryptoList Component', () => {
  const cryptoCurrencies = [
    {
      id: '1',
      abbreviation: 'BTC',
      name: 'Bitcoin',
      price: 50000,
      lastHourChange: 1.5,
      historicalData: [],
      rank: 0,
    },
    {
      id: '2',
      abbreviation: 'ETH',
      name: 'Ethereum',
      price: 3000,
      lastHourChange: 0.5,
      historicalData: [],
      rank: 0,
    },
  ];
  const preloadedState = {
    cryptoCurrencies: {
      selectedCurrency: null,
      cryptoCurrencies,
      isListEnding: false,
      status: CurrencyStatus.IDLE,
    },
  };
  it('should render correctly', () => {
    const {getByTestId} = renderWithProviders(<CryptoList />);
    const cryptoList = getByTestId('crypto-list');
    expect(cryptoList).toBeTruthy();
  });

  it('should display crypto currencies', () => {
    const {getByText} = renderWithProviders(<CryptoList />, {
      preloadedState,
    });
    const btcText = getByText('BTC');
    const ethText = getByText('ETH');

    expect(btcText).toBeTruthy();
    expect(ethText).toBeTruthy();
  });

  it('should trigger loadMore when reaching the end of the list', () => {
    const {getByTestId} = renderWithProviders(
      <CryptoList loadMore={loadMoreMock} />,
      {
        preloadedState,
      },
    );
    const flatList = getByTestId('crypto-flatlist');
    fireEvent.scroll(flatList, {
      nativeEvent: {
        contentOffset: {y: 100},
        contentSize: {height: 200},
        layoutMeasurement: {height: 100},
      },
    });

    expect(loadMoreMock).toHaveBeenCalled();
  });

  it('should display ListFooter when isListEnding is true', () => {
    const {getByText} = renderWithProviders(<CryptoList />, {
      preloadedState: {
        ...preloadedState,
        cryptoCurrencies: {
          ...preloadedState.cryptoCurrencies,
          isListEnding: true,
        },
      },
    });
    const listFooterText = getByText('No more crypto currency at the moment');
    expect(listFooterText).toBeTruthy();
  });

  it('should not display ListFooter when isListEnding is false', () => {
    const {queryByText} = renderWithProviders(<CryptoList />, {
      preloadedState: {
        ...preloadedState,
        cryptoCurrencies: {
          ...preloadedState.cryptoCurrencies,
          isListEnding: false,
        },
      },
    });
    const listFooterText = queryByText('No more crypto currency at the moment');
    expect(listFooterText).toBeFalsy();
  });
  it('should display loading indicator when status is "loading"', () => {
    const {getByTestId} = renderWithProviders(<CryptoList />, {
      preloadedState: {
        ...preloadedState,
        cryptoCurrencies: {
          ...preloadedState.cryptoCurrencies,
          status: CurrencyStatus.LOADING,
        },
      },
    });
    const loadingIndicator = getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
  });
});
