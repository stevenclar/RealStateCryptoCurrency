import React from 'react';
import CryptoItem from '.';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';
import {renderWithProviders} from '../../../../jest/test-utils';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: jest.fn()}),
}));

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
});
