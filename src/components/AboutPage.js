import React from 'react';
import { View, Text } from 'react-native';

export default class AboutPage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'About'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            About this app
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '80%'
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              Made by Le Reacteur™ for our beloved students. We love them so
              much that we wanted to give them what we loved the most in
              programming. That is: React Native ... Okay ... I know ... It
              sounds BS but I needed a long text here as well ... :'(
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
