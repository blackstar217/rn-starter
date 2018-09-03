import React from "react";
import { createStackNavigator } from "react-navigation";
import DrawerNavigator from "./drawerNavigator";
import Profile from "../screens/Profile/";

const Router = createStackNavigator(
  {
    main: DrawerNavigator,
    profile: Profile
  },
  {
    initialRouteName: "main",
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false }
  }
);

export default Router;
