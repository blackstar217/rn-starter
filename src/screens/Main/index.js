import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import DrawerNavigation from '../../router/drawer';

const Main = createDrawerNavigator({
  drawerNavigation: {
    screen: DrawerNavigation
  }
})

export default Main
