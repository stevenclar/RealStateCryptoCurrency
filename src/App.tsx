import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';
import theme from './themes/default';
import ContainerProvider from './container/ContainerProvider';
import {Container} from './container';
import './container/containerConfig';

const App = (): JSX.Element => {
  return (
    <PaperProvider theme={theme}>
      <ContainerProvider container={Container}>
        <AppNavigator />
      </ContainerProvider>
    </PaperProvider>
  );
};

export default App;
