import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CryptoImage from '.';

jest.mock('../../../utils/crypto/getCurrencyImageUrl', () => ({
  getCurrencyImageUrl: jest.fn(
    abbreviation => `https://example.com/${abbreviation}.png`,
  ),
}));

describe('CryptoImage', () => {
  it('should render the correct image when abbreviation is provided', () => {
    const abbreviation = 'BTC';
    const {getByTestId, queryByTestId} = render(
      <CryptoImage abbreviation={abbreviation} />,
    );

    const fastImage = getByTestId('crypto-image');
    expect(fastImage).toBeTruthy();

    const avatar = queryByTestId('crypto-avatar');
    expect(avatar).toBeFalsy();
  });

  it('should render the default Avatar when abbreviation is not provided', () => {
    const {getByTestId, queryByTestId} = render(<CryptoImage />);

    const avatar = getByTestId('crypto-avatar');
    expect(avatar).toBeTruthy();

    const fastImage = queryByTestId('crypto-image');
    expect(fastImage).toBeFalsy();
  });

  it('should render the default Avatar when there is an error loading the image', () => {
    const abbreviation = 'XYZ';
    const {getByTestId, queryByTestId} = render(
      <CryptoImage abbreviation={abbreviation} />,
    );

    const fastImage = getByTestId('crypto-image');
    expect(queryByTestId('crypto-avatar')).toBeFalsy();
    fireEvent(fastImage, 'onError');

    const avatar = getByTestId('crypto-avatar');
    expect(avatar).toBeTruthy();
  });
});
