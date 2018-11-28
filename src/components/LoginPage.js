import React from 'react';
import { Button, View, Text } from 'react-native';

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen </Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('SuccessfullyLoggedInPage')
          }
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
