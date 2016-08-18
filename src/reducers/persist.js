import {REHYDRATE} from 'redux-persist/constants';

const initialState = {rehydrated: false};

export default (state=initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return {rehydrated: true};

    default:
      return state;
  }
};
