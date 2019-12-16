import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'
import store from './src/core/store';
import MainScreen from './src/Screens/MainScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <MainScreen/>
      </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
