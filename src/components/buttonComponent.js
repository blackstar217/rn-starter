import React from 'react';
import { Button } from 'react-native';

const ButtonComponent = ({ label, onPress }) => {
  return (
    <Button
      onPress={() => onPress()}
      title={label}
      color="#841584"
    />
  )
}

export default ButtonComponent;
