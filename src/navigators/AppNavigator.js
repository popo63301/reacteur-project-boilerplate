import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from '../components/LoginPage';
import FeedPage from '../components/FeedPage';
import AboutPage from '../components/AboutPage';

const AppNavigator = createStackNavigator({
  //   LoginPage: {
  //     screen: LoginPage
  //   },

  FeedPage: { screen: FeedPage },
  AboutPage: { screen: AboutPage }
});

export default createAppContainer(AppNavigator);
