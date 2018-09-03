import React from "react";
import { View, Text, Button } from "react-native";

class Tab1 extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Open Drawer"
      />
    );
  }
}

export default Tab1;
