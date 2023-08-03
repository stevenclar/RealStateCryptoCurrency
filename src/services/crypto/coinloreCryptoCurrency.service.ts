import {CryptoCurrency} from '../../interfaces/CryptoCurrency';
import CryptoCurrencyService from '.';
import {getRandomNumber} from '../../utils/number/randomNumber';

const LIMIT = 40;

class CoinloreCryptoCurrencyService implements CryptoCurrencyService {
  async getCryptoCurrencies(page = 0): Promise<CryptoCurrency[]> {
    try {
      const start = page * LIMIT;
      const response = await fetch(
        `https://api.coinlore.net/api/tickers/?start=${start}&limit=40`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch getCurrencies');
      }
      const data = await response.json();
      const cryptoCurrencies: CryptoCurrency[] = data.data.map(
        (cryptoCurrency: any) => {
          return {
            id: cryptoCurrency.id,
            abbreviation: cryptoCurrency.symbol,
            name: cryptoCurrency.name,
            price: cryptoCurrency.price_usd,
            lastHourChange: cryptoCurrency.percent_change_1h,
            percentChange24h: cryptoCurrency.percent_change_24h,
            percentChange7d: cryptoCurrency.percent_change_7d,
            priceBtc: cryptoCurrency.price_btc,
            marketCapUsd: cryptoCurrency.market_cap_usd,
            volume24: cryptoCurrency.volume24,
            volume24Native: cryptoCurrency.volume24a,
            csupply: cryptoCurrency.csupply,
            tsupply: cryptoCurrency.tsupply,
            msupply: cryptoCurrency.msupply,
            historicalData: this.mockHistoricalData(),
          };
        },
      );
      return cryptoCurrencies;
    } catch (error: any) {
      throw new Error('Error while fetching getCurrencies: ' + error.message);
    }
  }

  /**
   * mock historical data from the last 30 days
   * @returns {number[]} Array of random numbers
   */

  private mockHistoricalData(): number[] {
    const data = [];
    for (let i = 0; i < 30; i++) {
      data.push(getRandomNumber(-50000, 50000));
    }
    return data;
  }
}

export default CoinloreCryptoCurrencyService;
