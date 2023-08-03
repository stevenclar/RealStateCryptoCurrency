import React from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CryptoDetailsScreen from '../screens/CryptoDetailScreen';
import {useTheme} from 'react-native-paper';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  CryptoDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const theme = useTheme() as Theme;
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()} theme={theme}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CryptoDetails" component={CryptoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
