import React from 'react';
import {View} from 'react-native';
import {Divider, Text, useTheme} from 'react-native-paper';
import styles from './styles';

interface ListFooterProps {
  isListEnding: boolean;
}

const ListFooter = ({isListEnding}: ListFooterProps) => {
  const {
    colors: {outline},
  } = useTheme();

  return (
    <View testID="list-footer">
      <Divider />
      {isListEnding && (
        <Text
          style={{...styles.listFooterText, color: outline}}
          variant="labelSmall">
          No more crypto currency at the moment
        </Text>
      )}
    </View>
  );
};

ListFooter.defaultProps = {
  isListEnding: false,
};

export default ListFooter;
