import React from "react";
import { View, Text, Button } from "react-native";

class Tab2 extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go to Tab"
        />
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Tab2;
