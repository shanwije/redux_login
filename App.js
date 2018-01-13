/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppMain from './src/components/AppMain';

const store = configureStore();
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store = {store}>
      <View style={styles.container}>
        <AppMain/>
      </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBB',
  }
});


