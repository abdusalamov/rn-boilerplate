import {CHANGE_SIDE_MENU_STATE} from '../actions/sideMenu';

const initialState = {isOpen: false};

export default (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_SIDE_MENU_STATE:
      return {isOpen: action.isOpen};

    default:
      return state;
  }
};
