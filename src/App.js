import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigators/AppNavigator';

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
