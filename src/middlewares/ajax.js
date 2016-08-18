import omit from 'lodash/omit';
import config from '../config';

const defaultHeaders = {
  Accept:         'application/json',
  'Content-Type': 'application/json',
  clientSecret:   config.clientSecret,
  clientId:       config.clientId
};

export const req = ({headers, endpoint, body, method='get'}) => {
  headers = Object.assign({}, defaultHeaders, headers);

  if (body && method === 'post') {
    const isFormData = ~headers['Content-Type']
      .indexOf('multipart/form-data');

    if (!isFormData) {
      body = JSON.stringify(body);
    }
  }

  return fetch(endpoint, {method, headers, body});
};

export const parseRes = res => {
  if (res.status !== 204) return res.json();
  return {};
};

export const checkErrInJSONRes = json => {
  if (json.error) return Promise.reject(json.error);
  return Promise.resolve(json.body || json);
};

export default store => next => action => {
  if (!action.ajax) {
    return next(action);
  }

  const reqOpts = omit(action, ['type', 'actions']);
  const [successAction, failureAction] = action.actions;

  next(action);

  return req(reqOpts)
    .then(parseRes)
    .then(checkErrInJSONRes)
    .then(res => next(successAction(res)), err => next(failureAction(err)));
};
