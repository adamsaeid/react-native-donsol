import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';

import store from './src/store';
import Game from './src/components/Game';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Game />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
