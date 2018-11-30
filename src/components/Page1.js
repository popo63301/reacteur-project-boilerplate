import React from 'react';
import { View, Text } from 'react-native';

export default class Page1 extends React.Component {
  //   static navigationOptions = {
  //     drawerLabel: 'Home'
  //   };

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
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Page1</Text>
        </View>
      </View>
    );
  }
}
