import React, { Component } from 'react';
import { View } from 'react-native';

export default class Logout extends Component {
  componentDidMount() {
    this.props.navigation.pop();
  }

  render() {
    return <View />;
  }
}
