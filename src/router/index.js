import React from "react";
import { createStackNavigator } from "react-navigation";
import DrawerNavigator from "./drawerNavigator";
import Profile from "../screens/Profile/";
import LoginScreen from "../screens/Login/";

const Router = createStackNavigator(
  {
    loginScreen: LoginScreen,
    main: DrawerNavigator,
    profile: Profile
  },
  {
    initialRouteName: "loginScreen",
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false }
  }
);

export default Router;
