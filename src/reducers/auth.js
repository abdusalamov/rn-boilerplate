import {
  TYPE_PASSWORD,
  TYPE_LOGIN,
  LOG_IN
} from '../actions/auth';

const initialState = {
  login: '',
  password: '',
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case TYPE_PASSWORD:
      return {
        ...state,
        password: action.text
      };

    case TYPE_LOGIN:
      return {
        ...state,
        login: action.text
      };

    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true
      };

    default:
      return state;
  }
};
