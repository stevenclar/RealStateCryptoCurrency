import {Container} from '.';
import CoinloreCryptoCurrencyService from '../services/crypto/coinloreCryptoCurrency.service';

Container.registry.cryptoCurrencyService = new CoinloreCryptoCurrencyService();
