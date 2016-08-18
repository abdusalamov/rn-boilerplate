import React, {Component} from 'react';
import {Navigator} from 'react-native';
import LeftBtn from '../LeftButton';
import NavBarTitle from '../NavBarTitle';
import styles, {navigationStyles} from './styles';

const routeMapper = {
  LeftButton: (route, navigator, index) => {
    return <LeftBtn navigator={navigator} index={index}/>;
  },

  Title: route => <NavBarTitle title={route.name}/>,

  RightButton: () => null
};

export default class extends Component {
  updateProgress(progress, fromIndex, toIndex) {
    this._nav.updateProgress(progress, fromIndex, toIndex);
  }

  render() {
    return <Navigator.NavigationBar
      {...this.props}
      ref               = {nav => this._nav = nav}
      routeMapper       = {routeMapper}
      style             = {styles.navBar}
      navigationStyles  = {navigationStyles}
    />;
  }
};
