import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Avatar, Title, Paragraph, useTheme} from 'react-native-paper';
import styles from './styles';
import {currencyFormat} from '../../../utils/currency/currencyFormat';

export interface Crypto {
  id: string;
  icon: string;
  abbreviation: string;
  name: string;
  price: number;
  lastHourChange: number;
}

interface CryptoItemProps extends Crypto {}

const CryptoItem = ({
  icon,
  abbreviation,
  name,
  price,
  lastHourChange,
}: CryptoItemProps) => {
  const formatPrice = useMemo(() => currencyFormat(price), [price]);
  const isPositive = useMemo(() => lastHourChange >= 0, [lastHourChange]);
  const lastHourChangeSign = useMemo(
    () => (isPositive ? '+' : ''),
    [isPositive],
  );
  const lastHourChangeColor = useMemo(
    () => (isPositive ? 'green' : 'red'),
    [isPositive],
  );
  const {
    colors: {backdrop},
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <Avatar.Icon size={40} icon={icon} />
          <View style={styles.titleContainer}>
            <Title>{abbreviation}</Title>
            <Paragraph style={{color: backdrop}}>{name}</Paragraph>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Paragraph>{`USD ${formatPrice}`}</Paragraph>
          <Paragraph style={{color: lastHourChangeColor}}>
            {`${lastHourChangeSign}${lastHourChange}%`}
          </Paragraph>
        </View>
      </View>
    </View>
  );
};

export default CryptoItem;
