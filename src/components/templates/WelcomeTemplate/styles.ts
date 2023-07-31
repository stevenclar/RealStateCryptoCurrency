import {Dimensions, StyleSheet} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const marginHorizontal = 88;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  logo: {
    flex: 1,
    width: screenWidth - marginHorizontal * 2,
    height: screenWidth - marginHorizontal * 2,
    marginHorizontal,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 56,
    marginHorizontal: 24,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 56,
    marginHorizontal: 24,
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    marginTop: 8,
    marginHorizontal: 48,
  },
  image: {
    width: screenWidth,
    height: screenHeight / 2,
  },
  button: {
    marginHorizontal: 24,
    marginVertical: 8,
  },
  smallButtonLabel: {
    fontSize: 10,
  },
});
