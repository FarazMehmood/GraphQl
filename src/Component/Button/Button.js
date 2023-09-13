import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 343,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal:15,
    fontSize: 16,
    alignSelf: 'center',
    backgroundColor: '#007BFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  
  },
  buttonText: {
    fontFamily: 'Rajdhani',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default CustomButton;
