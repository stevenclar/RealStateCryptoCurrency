import {CryptoCurrency} from '../../interfaces/CryptoCurrency';

interface CryptoCurrencyService {
  getCryptoCurrencies(page: number): Promise<CryptoCurrency[]>;
}

export default CryptoCurrencyService;
