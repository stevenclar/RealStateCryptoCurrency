import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import theme from './themes/default';
import ContainerProvider from './container/ContainerProvider';
import {Container} from './container';
import './container/containerConfig';
import {store} from './store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <ContainerProvider container={Container}>
          <AppNavigator />
        </ContainerProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
