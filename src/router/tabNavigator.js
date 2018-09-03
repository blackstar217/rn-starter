import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import TabNavigation from "./tabNavigator";
import Tab1 from "../screens/Home/";
import Tab2 from "../screens/Profile/";

const TabNavigator = createBottomTabNavigator({
  tab1: Tab1,
  tab2: Tab2
});

export default TabNavigator;
