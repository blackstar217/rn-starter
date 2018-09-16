import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ShareDialog } from 'react-native-fbsdk';

class Tab2 extends React.Component {

  sharePhoto = () => {
    const content = {
      contentType: 'photo',
      photos: [{ imageUrl: 'https://randomuser.me/api/portraits/thumb/men/20.jpg' }]
    };
    ShareDialog.canShow(content).then(
      canShow => {
        if (canShow) {
          return ShareDialog.show(content);
        } else {
          alert('You need to install facebook app to share your photos')
        }
      }
    ).then(result => {
      if (result.isCancelled) {
        alert('Share cancelled');
      }
    }, error => {
      alert('Share fail with error: ' + error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go to Tab"
        />
        <Text>Profile</Text>
        <Button
          onPress={this.sharePhoto}
          title="Share Photp"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Tab2;
