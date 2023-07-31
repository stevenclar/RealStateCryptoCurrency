import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const marginHorizontal = 88;

export const styles = StyleSheet.create({
  logo: {
    width: screenWidth - marginHorizontal * 2,
    height: screenWidth - marginHorizontal * 2,
    marginHorizontal,
  },
});
