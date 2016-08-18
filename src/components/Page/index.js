import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from '../Button';
import styles from './styles';

export default ({title, toPage}) => {

  return (
    <View style={styles.cont}>
      <Text style={styles.h1}>
        {title}
      </Text>

      <Text style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras aliquam elit ac eros volutpat luctus. Sed nec lacus mi.
        Ut ornare, tellus sed egestas tempor, mi nisl congue erat, ac efficitur
        neque lectus ac lectus. Vestibulum pretium hendrerit velit nec.
      </Text>

      <Text style={styles.p}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras aliquam elit ac eros volutpat luctus. Sed nec lacus mi.
        Ut ornare, tellus sed egestas tempor, mi nisl congue erat, ac efficitur
        neque lectus ac lectus. Vestibulum pretium hendrerit velit nec.
      </Text>

      <Button text="Go to next page" onPress={toPage} style={styles.btn}/>
    </View>
  );
}
