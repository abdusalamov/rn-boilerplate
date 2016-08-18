import auth from './auth';
import sideMenu from './sideMenu';
import persist from './persist';
import errors from './errors';
import {combineReducers} from 'redux';
import {LOG_OUT} from '../actions/auth';

const reducer = combineReducers({
  auth,
  persist,
  sideMenu,
  errors
});

export default (state, action) => {
  if (action.type === LOG_OUT) {
    return {
      auth:     auth(undefined, {}),
      persist:  {rehydrated: true},
      sideMenu: sideMenu(undefined, {}),
      errors:   errors(undefined, {})
    }
  }

  return reducer(state, action);
}
