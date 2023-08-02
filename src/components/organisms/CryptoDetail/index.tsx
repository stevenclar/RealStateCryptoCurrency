import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import CryptoImage from '../../atoms/CryptoImage';
import {Divider, Text, useTheme} from 'react-native-paper';
import styles from './styles';
import PriceChange from '../../atoms/PriceChange';
import {
  currencyFormat,
  formatNumberToKMB,
} from '../../../utils/currency/currencyFormat';
import Spacer from '../../atoms/Spacer';
import LineChart from '../../atoms/LineChart';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';

const mockCrypto: CryptoCurrency = {
  id: '1',
  name: 'Bitcoin',
  abbreviation: 'BTC',
  lastHourChange: 0.1,
  price: 1000,
};

const mockHistoricalData = [
  50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 90, 100, 20,
  -50, 60, 50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80, 90,
  100, 20, -50, 60, 50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20,
];

const CryptoDetail = () => {
  const {
    colors: {secondary, outline},
  } = useTheme();
  const [crypto, setCrypto] = useState(mockCrypto);

  const formatPrice = useMemo(
    () => currencyFormat(crypto.price),
    [crypto.price],
  );

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={{color: outline}} variant="headlineLarge">
          {crypto.abbreviation}
        </Text>
        <CryptoImage
          abbreviation={crypto.abbreviation}
          height={70}
          width={70}
        />
        <Text style={{color: outline}} variant="titleMedium">
          {crypto.name}
        </Text>
        <Spacer size={12} />
        <PriceChange lastChangePercent={crypto.lastHourChange} />
        <Text variant="titleLarge">{formatPrice} USD</Text>
      </View>
      <Divider />
      <View>
        <LineChart
          data={mockHistoricalData}
          strokeColor={secondary}
          enableGrid
          enableXAxis
          enableYAxis
          formatYAxisLabel={formatNumberToKMB}
        />
      </View>
      <Divider />
    </View>
  );
};

export default CryptoDetail;
