import React from 'react';
import { Button, View, Text } from 'react-native';

export default class SuccessfullyLoggedInPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SuccessfullyLoggedInPage Screen </Text>
        <Button
          onPress={() => this.props.navigation.navigate('LoginPage')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
