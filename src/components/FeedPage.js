import React from 'react';
import { View, Text } from 'react-native';

export default class FeedPage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
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
            Welcome to this Awesome App
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
              Here is an article from my feed. You see? It's awesome... Really
              awesome.... Also, I'd like to say React native is awesome. First,
              because it's awesome and also because I need a long text for this
              page
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
