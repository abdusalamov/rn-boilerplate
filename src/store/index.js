import {AsyncStorage} from 'react-native';
import {getStoredState, autoRehydrate, createPersistor} from 'redux-persist'
import {createStore, applyMiddleware, compose} from 'redux';

import middlewares from '../middlewares';
import reducers from '../reducers';

import {name as appName, version as appVersion} from '../../package.json';

let store = null;
let persistor = null;

export const getStorage = () => {
  if (store) return Promise.resolve(store);
  return createStorage();
};

export const clearStorage = () => {
  if (!persistor) throw new Error('persistor must be defined');
  persistor.purge();
};

const createStorage = () => {
  const persistConfig = {
    storage:    AsyncStorage,
    blacklist:  ['persist']
  };

  return getStoredState(persistConfig)
    .then(restoredState => {
      store = createStore(reducers, undefined, applyMiddleware(...middlewares));
      persistor = createPersistor(store, persistConfig);

      persistor.rehydrate(restoredState);

      return isAppVersionDifferent(appName, appVersion);
    })
    .then(isDifferent => {
      if (isDifferent) clearStorage();
      return saveAppVersion(appName, appVersion);
    })
    .then(() => Promise.resolve(store));
};

const isAppVersionDifferent = (appName, appVersion) => {
  return AsyncStorage
    .getItem(`${appName}_version`)
    .then(version => Promise.resolve(appVersion !== version));
};

const saveAppVersion = (appName, appVersion) => {
  return AsyncStorage
    .setItem(`${appName}_version`, appVersion);
};
