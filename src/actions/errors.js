export const ADD_ERROR = 'ADD_ERROR';
export const SHOW_ERROR = 'SHOW_ERROR';

export const addError = err => ({
  type: ADD_ERROR,
  date: new Date().getTime(),
  err
});

export const showError = () => ({
  type: SHOW_ERROR
});
