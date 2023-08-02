import React from 'react';
import {View} from 'react-native';
import CryptoList from '../../organisms/CryptoList';

interface CryptoListTemplateProps {
  loadMore?: () => void;
}

const CryptoListTemplate = ({loadMore}: CryptoListTemplateProps) => {
  return (
    <View>
      <CryptoList loadMore={loadMore} />
    </View>
  );
};

export default CryptoListTemplate;
