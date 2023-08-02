import React from 'react';
import {View} from 'react-native';
import CryptoList from '../../organisms/CryptoList';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';

interface CryptoListTemplateProps {
  data: CryptoCurrency[];
}

const CryptoListTemplate = ({data}: CryptoListTemplateProps) => {
  return (
    <View>
      <CryptoList data={data} />
    </View>
  );
};

export default CryptoListTemplate;
