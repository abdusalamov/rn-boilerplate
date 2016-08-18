import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default ({
  text,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity style={[styles.cont, style]} onPress={onPress}>
      <Text style={styles.text} numberOfLines={1}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
