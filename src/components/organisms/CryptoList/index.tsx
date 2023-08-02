import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ActivityIndicator, Divider} from 'react-native-paper';
import CryptoItem from '../../molecules/CryptoItem';
import TextInput from '../../atoms/TextInput';
import styles from './styles';
import {debounce} from 'lodash';
import {useAppSelector} from '../../../store/hooks';
import ListFooter from '../../atoms/ListFooter';

interface CryptoListProps {
  loadMore?: () => void;
}

const CryptoList = ({loadMore}: CryptoListProps) => {
  const cryptoCurrencies = useAppSelector(
    state => state.cryptoCurrencies.cryptoCurrencies,
  );
  const status = useAppSelector(state => state.cryptoCurrencies.status);
  const isListEnding = useAppSelector(
    state => state.cryptoCurrencies.isListEnding,
  );
  const [filteredData, setFilteredData] = useState(cryptoCurrencies);
  const [searchQuery, setSearchQuery] = useState('');

  const isLoading = useMemo(() => status === 'loading', [status]);

  const dataRef = useRef(cryptoCurrencies);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    dataRef.current = cryptoCurrencies;
    handleFilter(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cryptoCurrencies]);

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
        onEndReached={loadMore}
        ListFooterComponent={<ListFooter isListEnding={isListEnding} />}
      />
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

CryptoList.defaultProps = {
  loadMore: () => {},
};

export default CryptoList;
