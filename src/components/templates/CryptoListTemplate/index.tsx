import React from 'react';
import {View} from 'react-native';
import CryptoList from '../../organisms/CryptoList';
import {Crypto} from '../../molecules/CryptoItem';

interface CryptoListTemplateProps {
  data: Crypto[];
}

const CryptoListTemplate = ({data}: CryptoListTemplateProps) => {
  return (
    <View>
      <CryptoList data={data} />
    </View>
  );
};

export default CryptoListTemplate;
