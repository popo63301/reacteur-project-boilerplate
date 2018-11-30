import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import FeedPage from '../components/FeedPage';
import AboutPage from '../components/AboutPage';
import Logout from '../components/Logout';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator({
  FeedPage: {
    screen: TabNavigator
  },
  AboutPage: { screen: AboutPage },
  Logout: { screen: Logout }
});

class DrawerNavigator extends Component {
  static router = Drawer.router;
  render() {
    return <Drawer navigation={this.props.navigation} />;
  }
}

export default DrawerNavigator;
