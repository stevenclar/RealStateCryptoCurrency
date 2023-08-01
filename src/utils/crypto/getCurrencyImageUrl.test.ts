import {getCurrencyImageUrl} from './getCurrencyImageUrl';

describe('getCurrencyImageUrl', () => {
  it('should return the correct URL for a given currency', () => {
    const currency = 'BTC';
    const expectedUrl = 'https://cryptoicons.org/api/color/btc/200';
    const imageUrl = getCurrencyImageUrl(currency);
    expect(imageUrl).toBe(expectedUrl);
  });

  it('should return the correct URL for a different currency', () => {
    const currency = 'ETH';
    const expectedUrl = 'https://cryptoicons.org/api/color/eth/200';
    const imageUrl = getCurrencyImageUrl(currency);
    expect(imageUrl).toBe(expectedUrl);
  });

  it('should handle lowercase currency symbols', () => {
    const currency = 'usdt';
    const expectedUrl = 'https://cryptoicons.org/api/color/usdt/200';
    const imageUrl = getCurrencyImageUrl(currency);
    expect(imageUrl).toBe(expectedUrl);
  });

  it('should handle mixed case currency symbols', () => {
    const currency = 'eTh';
    const expectedUrl = 'https://cryptoicons.org/api/color/eth/200';
    const imageUrl = getCurrencyImageUrl(currency);
    expect(imageUrl).toBe(expectedUrl);
  });
});
