import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';

const CustomInput = ({
  value,
  label,
  left,
  onChangeText,
  disabled,
  placeholder,
  secureTextEntry,
  right,
}) => {
  const theme = useSelector(state => state.theme.activeTheme);
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={theme === 'light' ? styles.textInput : styles.textInput_dark}
      left={left}
      disabled={disabled}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      right={right}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textInput_dark: {
    fontSize: 14,
    textAlign: 'center',
    width: '75%',
    height: 45,
    marginBottom: 10,
    backgroundColor: 'black',
  },
  textInput: {
    height: 45,
    fontSize: 14,
    textAlign: 'center',
    width: '75%',
    marginBottom: 10,
    backgroundColor: '#d3d3d3',
  },
});
