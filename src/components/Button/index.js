import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
