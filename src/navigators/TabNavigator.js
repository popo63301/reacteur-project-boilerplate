import { createBottomTabNavigator } from 'react-navigation';
import FeedPage from '../components/FeedPage';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';

const TabNavigator = createBottomTabNavigator({
  FeedPage: {
    screen: FeedPage,
    navigationOptions: {
      title: 'Home'
    }
  },
  Page1: {
    screen: Page1,
    navigationOptions: {
      title: 'Page 1'
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      title: 'Page 2'
    }
  }
});

export default TabNavigator;
