import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';

export default class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            // backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Login Screen</Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            keyboardType="email-address"
          />
          <TextInput
            style={{
              marginTop: 40,
              height: 40,
              width: 200,
              borderColor: 'gray',
              borderWidth: 1
            }}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
          />
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            style={{
              flex: 1
            }}
            onPress={() => this.props.navigation.navigate('FeedPage')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
