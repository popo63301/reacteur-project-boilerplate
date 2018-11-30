import React from 'react';
import { AsyncStorage, Button, TextInput, View, Text } from 'react-native';

export default class SignupPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  signup = () => {
    const { email, password } = this.state;

    if (email.length > 5 && password.length > 5) {
      AsyncStorage.setItem(email, password, () => {
        this.props.navigation.navigate('LoginPage');
      });
    }
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
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text>Signup Screen</Text>
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
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button
            style={{
              flex: 1
            }}
            onPress={this.signup}
            title="Create an account"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}
