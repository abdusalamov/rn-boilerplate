import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import ajax from './ajax';

const middlewares = [thunk, ajax];

if (__DEV__) {
  const logger = createLogger({
    duration: true,
    collapsed: true
  });

  middlewares.push(logger);
}

export default middlewares;
