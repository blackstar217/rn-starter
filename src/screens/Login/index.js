import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import TextInputComponent from '../../components/textInputComponent';
import ButtonComponent from '../../components/buttonComponent';

const { width } = Dimensions.get('window');

class LoginScreen extends React.Component {
  state = {
    email: null,
    password: null
  }

  onChangeEmail = value => {
    this.setState({ email: value });
  }

  onChangePassword = value => {
    this.setState({ password: value });
  }

  onLogin = () => {
    alert(JSON.stringify(this.state));
  }

  onLoginWithFB = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(
            data => {
              alert('Login success with permissions: ' +  data.accessToken.toString());
              this.props.navigation.navigate('profile');
            }
          )
        }
      },
      error => {
        alert('FaceBookLogin fail with error: ' + error)
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInputComponent
            placeholder="email"
            onChangeText={this.onChangeEmail}
          />
          <TextInputComponent
            placeholder="password"
            onChangeText={this.onChangePassword}
          />
        </View>
        <ButtonComponent
          label="Login"
          onPress={this.onLogin}
        />
        <ButtonComponent
          label="Facebook Login"
          onPress={this.onLoginWithFB}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInputContainer: {
    width: width - 40,
    height: 140,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LoginScreen;
