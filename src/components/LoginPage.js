import React from 'react';
import { AsyncStorage, Button, TextInput, View, Text } from 'react-native';

export default class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  login = () => {
    const { email, password } = this.state;

    AsyncStorage.getItem(email, (err, result) => {
      if (password === result) {
        this.props.navigation.navigate('FeedPage');
        this.setState({ email: '', password: '' });
      }
    });
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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View>
            <Button
              onPress={this.login}
              title="Log in"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View
            style={{
              marginLeft: 30
            }}
          >
            <Button
              onPress={() => this.props.navigation.navigate('SignupPage')}
              title="Sign up"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    );
  }
}
