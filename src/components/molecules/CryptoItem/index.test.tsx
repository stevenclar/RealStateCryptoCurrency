import React from 'react';
import {render} from '@testing-library/react-native';
import CryptoItem from '.';

const cryptoMock = {
  id: '1',
  abbreviation: 'BTC',
  name: 'Bitcoin',
  price: 45000,
  lastHourChange: 2.5,
};

describe('CryptoItem', () => {
  it('should render correctly with provided props', () => {
    const {getByText, getByTestId} = render(<CryptoItem {...cryptoMock} />);

    const abbreviation = getByText('BTC');
    const name = getByText('Bitcoin');
    const price = getByText('USD $45,000.00');
    const princeChange = getByTestId('prince-change');

    expect(abbreviation).toBeTruthy();
    expect(name).toBeTruthy();
    expect(price).toBeTruthy();
    expect(princeChange).toBeTruthy();
  });
});
