import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Title, Paragraph, useTheme, TouchableRipple} from 'react-native-paper';
import styles from './styles';
import {currencyFormat} from '../../../utils/currency/currencyFormat';
import PriceChange from '../../atoms/PriceChange';
import CryptoImage from '../../atoms/CryptoImage';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../utils/navigation/navigationProps';

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
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const formatPrice = useMemo(() => currencyFormat(price), [price]);

  const {
    colors: {backdrop},
  } = useTheme();
  return (
    <TouchableRipple
      style={styles.container}
      onPress={() => navigate('CryptoDetails', {symbol: '1'})}>
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
    </TouchableRipple>
  );
};

export default CryptoItem;
