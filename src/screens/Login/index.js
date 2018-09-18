import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
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
    this.props.navigation.navigate('lottieScreen');
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

  onLoginWithGoogle = async () => {
    GoogleSignin.configure({
      iosClientId: '511814273139-21retrsji8gsrb3q347t7ceosokap7ea.apps.googleusercontent.com'
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      alert(JSON.stringify(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('Cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Inprogress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Play Services not available');
      } else {
        alert(error);
      }
    }
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
        <ButtonComponent
          label="Google Login"
          onPress={this.onLoginWithGoogle}
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
