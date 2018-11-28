import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './components/LoginPage';
import SuccessfullyLoggedInPage from './components/SuccessfullyLoggedInPage';

const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: LoginPage
  },
  SuccessfullyLoggedInPage: { screen: SuccessfullyLoggedInPage }
});

export default createAppContainer(AppNavigator);
