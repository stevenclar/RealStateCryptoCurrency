import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Title, Paragraph, useTheme} from 'react-native-paper';
import styles from './styles';
import {currencyFormat} from '../../../utils/currency/currencyFormat';
import PriceChange from '../../atoms/PriceChange';
import CryptoImage from '../../atoms/CryptoImage';

export interface Crypto {
  id: string;
  abbreviation: string;
  name: string;
  price: number;
  lastHourChange: number;
}

interface CryptoItemProps extends Crypto {}

const CryptoItem = ({
  abbreviation,
  name,
  price,
  lastHourChange,
}: CryptoItemProps) => {
  const formatPrice = useMemo(() => currencyFormat(price), [price]);

  const {
    colors: {backdrop},
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <CryptoImage abbreviation={abbreviation} />
          <View style={styles.titleContainer}>
            <Title>{abbreviation}</Title>
            <Paragraph style={{color: backdrop}}>{name}</Paragraph>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Paragraph>{`USD ${formatPrice}`}</Paragraph>
          <PriceChange
            lastChangePercent={lastHourChange}
            testID="price-change"
          />
        </View>
      </View>
    </View>
  );
};

export default CryptoItem;
