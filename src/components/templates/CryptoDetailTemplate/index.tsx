import React = require('react');
import {View} from 'react-native';
import styles from './styles';
import CryptoDetail from '../../organisms/CryptoDetail';

const CryptoDetailTemplate = () => {
  return (
    <View style={styles.container}>
      <CryptoDetail />
    </View>
  );
};

export default CryptoDetailTemplate;
