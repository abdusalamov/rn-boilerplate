import React from 'react';
import {connect} from 'react-redux';
import Auth from '../components/Auth';
import {
  typePassword,
  typeLogin,
  logIn
} from '../actions/auth';

const AuthScene = props => <Auth {...props}/>;

const mapDispatchToProps = dispatch => ({
  logIn:        () => dispatch(logIn()),
  typePassword: text => dispatch(typePassword(text)),
  typeLogin:    text => dispatch(typeLogin(text))
});

export default connect(null, mapDispatchToProps)(AuthScene);
