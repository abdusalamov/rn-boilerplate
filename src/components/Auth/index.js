import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Button from '../Button';
import styles, {underlineColor} from './styles';

export default class extends Component {
  render() {
    const {
      typeLogin,
      typePassword,
      logIn
    } = this.props;

    return (
      <View style={styles.cont}>
        <View style={styles.inputCont}>
          <TextInput
            autoCapitalize        = "none"
            placeholder           = "Логин"
            underlineColorAndroid = {underlineColor}
            style                 = {styles.input}
            onChangeText          = {typeLogin}
            onSubmitEditing       = {() => this.password.focus()}
            autoFocus
          />
        </View>
        <View style={styles.inputCont}>
          <TextInput
            autoCapitalize        = "none"
            placeholder           = "Пароль"
            underlineColorAndroid = {underlineColor}
            ref                   = {ref => this.password = ref}
            style                 = {styles.input}
            onChangeText          = {typePassword}
            onSubmitEditing       = {logIn}
            secureTextEntry
          />
        </View>
      <Button text="Войти" onPress={logIn}/>
      </View>
    );
  }
}
