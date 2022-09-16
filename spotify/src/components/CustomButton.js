import {View, StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress, disabled}) => {
  return (
    <View style={styles.button} onPress={onPress}>
      <Pressable onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: '85%',
    height: 45,
    backgroundColor: '#1cd760',
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    width: '100%',
    height: '100%',
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
