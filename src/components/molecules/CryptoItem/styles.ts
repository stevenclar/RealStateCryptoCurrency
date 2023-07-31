import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 8,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  titleContainer: {
    marginLeft: 12,
  },
  image: {
    width: 40,
    height: 40,
  },
});
