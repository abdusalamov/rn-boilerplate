import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {changeSideMenuState}  from '../../actions/sideMenu';
import styles, {leftBtnColor} from './styles';

const LeftButton = ({navigator, index, openSideMenu}) => {
  let iconName;
  let iconSize;
  let onPress;

  if (index === 0) {
    onPress = openSideMenu;
    iconName = 'ios-menu-outline';
    iconSize = 30;
  } else {
    onPress = navigator.pop;
    iconName = 'ios-arrow-round-back-outline';
    iconSize = 45;
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.cont}>
      <IonicIcon
        name  = {iconName}
        size  = {iconSize}
        color = {leftBtnColor}
      />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => ({
  openSideMenu: () => dispatch(changeSideMenuState(true))
});

export default connect(null, mapDispatchToProps)(LeftButton);
