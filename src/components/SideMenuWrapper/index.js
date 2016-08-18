import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import SideMenu from 'react-native-side-menu';
import {changeSideMenuState} from '../../actions/sideMenu';
import {logOut} from '../../actions/auth';
import RocketSideMenu from '../SideMenu';
import styles from './styles';

class SideMenuProvider extends Component {
  constructor(props) {
    super(props);
    this.changeLocation = this.changeLocation.bind(this);
    this.handleChange   = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const {isOpen} = this.props;
    return isOpen !== nextProps.isOpen;
  }

  handleChange(nextIsOpen) {
    const {isOpen} = this.props;
    const isChangeAlreadyHandled = isOpen === nextIsOpen;
    if (isChangeAlreadyHandled) return;

    const {changeSideMenuState} = this.props;
    changeSideMenuState(nextIsOpen);
  }

  changeLocation(route) {
    const {changeSideMenuState, onMenuClick} = this.props;
    changeSideMenuState(false);
    onMenuClick(route);
  }

  renderMenu() {
    const {logOut} = this.props;
    return (
      <RocketSideMenu
        onClick = {this.changeLocation}
        logOut  = {logOut}
      />
    );
  }

  render() {
    const {children, isOpen} = this.props;

    return (
      <SideMenu
        isOpen        = {isOpen}
        onChange      = {this.handleChange}
        menu          = {this.renderMenu()}
        edgeHitWidth  = {150}
      >
        <View style={styles.cont}>
          {children}
        </View>
      </SideMenu>
    );
  }
}

const mapStateToProps = ({sideMenu: {isOpen}}) => ({isOpen});

const mapDispatchToProps = dispatch => ({
  changeSideMenuState: isOpen => dispatch(changeSideMenuState(isOpen)),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuProvider);
