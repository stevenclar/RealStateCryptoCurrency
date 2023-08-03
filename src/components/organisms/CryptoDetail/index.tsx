import React, {useMemo} from 'react';
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
import {useAppSelector} from '../../../store/hooks';

const CryptoDetail = () => {
  const {
    colors: {secondary, outline},
  } = useTheme();

  const crypto = useAppSelector(
    state => state.cryptoCurrencies.selectedCurrency,
  );

  const formatPrice = useMemo(
    () => crypto?.price && `${currencyFormat(crypto?.price)} USD`,
    [crypto?.price],
  );

  return (
    <View style={styles.container} testID="crypto-detail">
      <View style={styles.detailsContainer}>
        <Text
          style={{color: outline}}
          variant="headlineLarge"
          testID="abbreviation-text">
          {crypto?.abbreviation ?? 'N/A'}
        </Text>
        <CryptoImage
          abbreviation={crypto?.abbreviation}
          height={70}
          width={70}
        />
        <Text style={{color: outline}} variant="titleMedium" testID="name-text">
          {crypto?.name ?? 'N/A'}
        </Text>
        <Spacer size={12} />
        {crypto?.lastHourChange && (
          <PriceChange lastChangePercent={crypto.lastHourChange} />
        )}
        <Text variant="titleLarge" testID="price-text">
          {formatPrice ?? 'N/A'}
        </Text>
      </View>
      <Divider />
      {!!crypto?.historicalData?.length && (
        <View testID="historical-chart">
          <LineChart
            data={crypto.historicalData}
            strokeColor={secondary}
            enableGrid
            enableXAxis
            enableYAxis
            formatYAxisLabel={formatNumberToKMB}
          />
        </View>
      )}
      <Divider />
    </View>
  );
};

export default CryptoDetail;
