import React from "react";
import { createStackNavigator } from "react-navigation";
import DrawerNavigator from "./drawerNavigator";
import Profile from "../screens/Profile/";
import LoginScreen from "../screens/Login/";
import LottieScreen from "../screens/Lottie/";

const Router = createStackNavigator(
  {
    loginScreen: LoginScreen,
    main: DrawerNavigator,
    profile: Profile,
    lottieScreen: LottieScreen
  },
  {
    initialRouteName: "loginScreen",
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false }
  }
);

export default Router;
