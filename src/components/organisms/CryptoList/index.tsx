import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Divider} from 'react-native-paper';
import CryptoItem from '../../molecules/CryptoItem';
import TextInput from '../../atoms/TextInput';
import styles from './styles';
import {debounce} from 'lodash';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';

interface CryptoListProps {
  data: CryptoCurrency[];
}

const CryptoList = ({data}: CryptoListProps) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('B');

  const dataRef = useRef(data);

  const handleFilterRef = useRef(
    debounce((text: string) => {
      const lowerText = text.toLowerCase();
      const filteredItems = dataRef.current.filter(item => {
        return Object.values(item).some(
          value =>
            typeof value === 'string' &&
            value.toLowerCase().includes(lowerText),
        );
      });
      setFilteredData(filteredItems);
    }, 400),
  );

  const handleFilter = useCallback((text: string) => {
    handleFilterRef.current(text);
  }, []);

  const MemoizedSpacerComponent = useCallback(() => <Divider />, []);

  useEffect(() => {
    handleFilter(searchQuery);
  }, [handleFilter, searchQuery]);

  useEffect(() => {
    dataRef.current = data;
    handleFilter(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredData}
        ListHeaderComponent={
          <TextInput
            placeholder=""
            onChangeText={setSearchQuery}
            value={searchQuery}
            right="magnify"
          />
        }
        renderItem={({item}) => <CryptoItem {...item} />}
        ItemSeparatorComponent={MemoizedSpacerComponent}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default CryptoList;
