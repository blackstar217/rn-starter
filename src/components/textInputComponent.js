import React from 'react';
import { TextInput, StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

const TextInputComponent = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={placeholder}
      onChangeText={value => onChangeText(value)}
    />
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    width: width - 80,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 3
  }
})

export default TextInputComponent;
