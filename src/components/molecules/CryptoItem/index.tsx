import React, {useMemo, useState} from 'react';
import {View} from 'react-native';
import {Title, Paragraph, useTheme, Avatar} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import {currencyFormat} from '../../../utils/currency/currencyFormat';
import {getCurrencyImageUrl} from '../../../utils/crypto/getUrlImage';

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
  abbreviation,
  name,
  price,
  lastHourChange,
}: CryptoItemProps) => {
  const [errorImage, setErrorImage] = useState(false);
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

  const currencyUrlImage = useMemo(
    () => getCurrencyImageUrl(abbreviation),
    [abbreviation],
  );

  React.useEffect(() => {
    console.log(currencyUrlImage);
  }, [currencyUrlImage]);

  const {
    colors: {backdrop},
  } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          {currencyUrlImage && !errorImage && (
            <FastImage
              source={{uri: currencyUrlImage}}
              resizeMode={FastImage.resizeMode.contain}
              onError={() => {
                setErrorImage(true);
              }}
              style={styles.image}
            />
          )}
          {errorImage && <Avatar.Icon size={40} icon="bitcoin" />}
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
