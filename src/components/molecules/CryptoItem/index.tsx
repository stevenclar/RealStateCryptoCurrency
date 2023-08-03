import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import {Title, Paragraph, useTheme, TouchableRipple} from 'react-native-paper';
import styles from './styles';
import {currencyFormat} from '../../../utils/currency/currencyFormat';
import PriceChange from '../../atoms/PriceChange';
import CryptoImage from '../../atoms/CryptoImage';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../../utils/navigation/navigationProps';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';
import {useAppDispatch} from '../../../store/hooks';
import {setCryptoCurrency} from '../../../store/cryptoCurrency/cryptoCurrencySlice';

interface CryptoItemProps extends CryptoCurrency {}

const CryptoItem = (cryptoCurrency: CryptoItemProps) => {
  const {navigate} = useNavigation<ScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const formatPrice = useMemo(
    () => currencyFormat(cryptoCurrency.price),
    [cryptoCurrency.price],
  );

  const handleSelectCrypto = useCallback(() => {
    dispatch(setCryptoCurrency(cryptoCurrency));
    navigate('CryptoDetails');
  }, [dispatch, navigate, cryptoCurrency]);

  const {
    colors: {backdrop},
  } = useTheme();
  return (
    <TouchableRipple style={styles.container} onPress={handleSelectCrypto}>
      <View style={styles.content}>
        <View style={styles.leftContent}>
          <CryptoImage abbreviation={cryptoCurrency.abbreviation} />
          <View style={styles.titleContainer}>
            <Title>{cryptoCurrency.abbreviation}</Title>
            <Paragraph style={{color: backdrop}}>
              {cryptoCurrency.name}
            </Paragraph>
          </View>
        </View>
        <View style={styles.rightContent}>
          <Paragraph>{`USD ${formatPrice}`}</Paragraph>
          <PriceChange
            lastChangePercent={cryptoCurrency.lastHourChange}
            testID="price-change"
          />
        </View>
      </View>
    </TouchableRipple>
  );
};

export default CryptoItem;
