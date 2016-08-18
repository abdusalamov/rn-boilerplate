import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default ({children}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  );
};
