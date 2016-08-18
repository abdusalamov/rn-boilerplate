import {
  ADD_ERROR,
  SHOW_ERROR
} from '../actions/errors';

const initialState = {log: [], unseen: []};

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        log: state.log,
        unseen: [
          ...state.unseen,
          {
            err: action.err,
            date: action.date
          }
        ]
      };

    case SHOW_ERROR: {
      const unseenlastIndex = state.unseen.length - 1;

      const err = state.unseen[unseenlastIndex];
      if (!err) return state;

      const nextLog = [...state.log, err];
      const nextUnseen = state.unseen.slice(0, unseenlastIndex - 1);

      return {
        log: nextLog,
        unseen: nextUnseen
      };
    }

    default:
      return state;
  }
};
