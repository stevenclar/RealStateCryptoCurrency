import {CryptoCurrency} from '../../interfaces/CryptoCurrency';

/**
 * CryptoCurrencyService interface
 * @interface
 * @exports
 * @default
 * @name CryptoCurrencyService
 * @description
 * Interface for CryptoCurrencyService
 * @example
 * import {CryptoCurrencyService} from './services/crypto';
 * import {CryptoCurrency} from './interfaces/CryptoCurrency';
 * export class CryptoCurrencyServiceImpl implements CryptoCurrencyService {
 *  getCryptoCurrencies(page: number): Promise<CryptoCurrency[]> {
 *   return Promise.resolve([]);
 * }
 * }
 */
interface CryptoCurrencyService {
  /**
   * Get crypto currencies
   * @param {number} page Page number
   * @returns {Promise<CryptoCurrency[]>} Promise with array of CryptoCurrency
   */
  getCryptoCurrencies(page: number): Promise<CryptoCurrency[]>;
}

export default CryptoCurrencyService;
