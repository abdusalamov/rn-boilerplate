import React, {Component} from 'react';
import {View} from 'react-native';
import routes from '../../routes';
import Button from '../Button';
import styles from './styles';

export default class extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {onClick, logOut} = this.props;

    const items = Object.keys(routes).map(key => {
      return (
        <Button
          key     = {key}
          style   = {styles.btn}
          text    = {routes[key].name}
          onPress = {() => onClick(routes[key])}
        />
      );
    });

    return (
      <View style={styles.cont}>
        <View>
          {items}
        </View>
        <Button
          text    = "Выйти"
          onPress = {logOut}
          style   = {styles.btn}
        />
      </View>
    );
  }
}
