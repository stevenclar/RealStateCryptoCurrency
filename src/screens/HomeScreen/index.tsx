import React from 'react';
import {BottomNavigation, useTheme} from 'react-native-paper';
import {styles} from './styles';
import CryptoListScreen from '../CryptoListScreen';
import ProfileScreen from '../ProfileScreen';

const HomeRoute = () => <CryptoListScreen />;
const ProfileRoute = () => <ProfileScreen />;

const HomeScreen = () => {
  const {
    colors: {secondary},
  } = useTheme();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: 'home',
      title: 'Crypto',
      focusedIcon: 'bitcoin',
    },
    {
      key: 'profile',
      title: 'Profile',
      focusedIcon: 'account',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      labeled={true}
      activeColor={secondary}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bar}
    />
  );
};

export default HomeScreen;
