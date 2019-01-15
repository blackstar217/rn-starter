import React from 'react';
import LottieView from 'lottie-react-native';

class LottieScreen extends React.Component {
  render() {
    return (
      <LottieView
        source={require('../../assets/animations/LottieLogo1.json')}
        autoPlay
        loop={false}
      />
    );
  }
}

export default LottieScreen;
