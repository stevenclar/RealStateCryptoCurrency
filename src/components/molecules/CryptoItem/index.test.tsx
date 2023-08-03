import React from 'react';
import CryptoItem from '.';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';
import {renderWithProviders} from '../../../../jest/test-utils';
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

const cryptoMock: CryptoCurrency = {
  id: '1',
  abbreviation: 'BTC',
  rank: 1,
  name: 'Bitcoin',
  price: 45000,
  lastHourChange: 2.5,
};

describe('CryptoItem', () => {
  it('should render correctly with provided props', () => {
    const {getByText, getByTestId} = renderWithProviders(
      <CryptoItem {...cryptoMock} />,
    );

    const abbreviation = getByText('BTC');
    const name = getByText('Bitcoin');
    const price = getByText('USD $45,000.00');
    const priceChange = getByTestId('price-change');

    expect(abbreviation).toBeTruthy();
    expect(name).toBeTruthy();
    expect(price).toBeTruthy();
    expect(priceChange).toBeTruthy();
  });

  it('should dispatch setCryptoCurrency and navigate to CryptoDetails on press', () => {
    const {getByTestId, store} = renderWithProviders(
      <CryptoItem {...cryptoMock} />,
    );

    const rippleContainer = getByTestId('ripple-container');

    fireEvent.press(rippleContainer);

    expect(store.getState().cryptoCurrencies.selectedCurrency).toEqual(
      cryptoMock,
    );
    expect(mockedNavigate).toHaveBeenCalledWith('CryptoDetails');
  });
});
