import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, View} from 'react-native';
import {Divider, Text, useTheme} from 'react-native-paper';
import CryptoItem from '../../molecules/CryptoItem';
import TextInput from '../../atoms/TextInput';
import styles from './styles';
import {debounce} from 'lodash';
import {CryptoCurrency} from '../../../interfaces/CryptoCurrency';

interface CryptoListProps {
  data: CryptoCurrency[];
  loadMore?: () => void;
}

const CryptoList = ({data, loadMore}: CryptoListProps) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState('B');

  const {
    colors: {outline},
  } = useTheme();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    dataRef.current = data;
    handleFilter(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const renderListEndComponent = useCallback(() => {
    return (
      <View>
        <Divider />
        <Text
          style={{...styles.listFooter, color: outline}}
          variant="labelSmall">
          No more crypto currency at the moment
        </Text>
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderListEmptyComponent = useCallback(() => {
    return <Text>No crypto currency found</Text>;
  }, []);

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
        ListFooterComponent={renderListEndComponent}
        ListEmptyComponent={renderListEmptyComponent}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
};

CryptoList.defaultProps = {
  loadMore: () => {},
};

export default CryptoList;
