import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';
import theme from './themes/default';

const App = (): JSX.Element => {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
