import {Container} from '.';
import CoinloreCryptoCurrencyService from '../services/crypto/coinloreCryptoCurrency.service';

// Add here your new services
Container.registry.cryptoCurrencyService = new CoinloreCryptoCurrencyService();
