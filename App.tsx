/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {Button, PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Real State Crypto Currency</Text>
      <Button icon="camera">Press me</Button>
    </View>
  );
};

const App = (): JSX.Element => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
