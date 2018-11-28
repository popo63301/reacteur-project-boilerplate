import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';

const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPage
  },
  SignupPage: { screen: SignupPage }
});

export default AppNavigator;
