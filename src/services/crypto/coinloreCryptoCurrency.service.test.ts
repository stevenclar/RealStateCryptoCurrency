import CoinloreCryptoCurrencyService from './coinloreCryptoCurrency.service';

describe('CoinloreCryptoCurrencyService', () => {
  const coinloreService = new CoinloreCryptoCurrencyService();

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch crypto currencies successfully', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({data: [{}, {}]}));
    const cryptoCurrencies = await coinloreService.getCryptoCurrencies(0);
    expect(Array.isArray(cryptoCurrencies)).toBe(true);
    expect(cryptoCurrencies.length).toBeGreaterThan(0);
  });

  it('should throw an error when fetching crypto currencies fails', async () => {
    fetchMock.mockRejectOnce(new Error('Error while fetching getCurrencies'));
    await expect(coinloreService.getCryptoCurrencies(0)).rejects.toThrowError(
      'Error while fetching getCurrencies',
    );
  });

  it('should generate historical data correctly', () => {
    // eslint-disable-next-line dot-notation
    const historicalData = coinloreService['mockHistoricalData']();
    expect(Array.isArray(historicalData)).toBe(true);
    expect(historicalData.length).toBe(30);
    historicalData.forEach(dataPoint => {
      expect(dataPoint).toBeGreaterThanOrEqual(-50000);
      expect(dataPoint).toBeLessThanOrEqual(50000);
    });
  });
});
