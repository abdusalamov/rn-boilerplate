import config from '../config';
import {addError} from './errors';

const {apiRoot, clientId, clientSecret} = config;

export const TYPE_PASSWORD = 'TYPE_PASSWORD';
export const TYPE_LOGIN = 'TYPE_LOGIN';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const typePassword = text => ({
  type: TYPE_PASSWORD,
  text
});

export const typeLogin = text => ({
  type: TYPE_LOGIN,
  text
});

export const logIn = () => ({
  type: LOG_IN,
  isAuthenticated: true
});

export const logOut = () => ({
  type: LOG_OUT,
  isAuthenticated: false
});

// ajax example
//
// export const saveAccessToken = () => null;
//
// export const logIn = (login, password) => ({
//   type: LOG_IN,
//   actions: [saveAccessToken, addError],
//   ajax: true,
//   method: 'post',
//   endpoint: apiRoot + '/oauth',
//   body: {
//     grant_type:     'password',
//     username:       login,
//     password:       password,
//     client_id:      clientId,
//     client_secret:  clientSecret
//   },
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//   }
// });
