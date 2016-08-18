import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default ({title}) => {
  return (
    <View style={styles.cont}>
      <Text
        style         = {styles.title}
        lineBreakMode = "tail"
        numberOfLines = {1}
      >
        {title}
      </Text>
    </View>
  )
};
