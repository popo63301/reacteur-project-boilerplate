import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import FeedPage from '../components/FeedPage';

import DrawerNavigator from './DrawerNavigator';

const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPage
  },
  SignupPage: { screen: SignupPage },
  FeedPage: {
    screen: DrawerNavigator,
    navigationOptions: () => ({
      headerLeft: null
    })
  }
});

export default createAppContainer(AppNavigator);
