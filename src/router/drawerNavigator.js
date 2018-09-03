import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import TabNavigator from "./tabNavigator";

const DrawerNavigator = createDrawerNavigator(
  {
    drawerNavigation: {
      screen: TabNavigator
    }
  },
  {
    contentComponent: ({ navigation }) => (
      <View>
        <Button
          onPress={() => navigation.navigate("profile")}
          title="Profile"
        />
      </View>
    ),
    drawerWidth: 300
  }
);

export default DrawerNavigator;
