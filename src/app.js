import React, {Component} from 'react';
import {Navigator, InteractionManager} from 'react-native';
import {Provider} from 'react-redux';

import routes from './routes';
import {getStorage, clearStorage} from './store';
import {showError} from './actions/errors';
import {logOut} from './actions/auth';

import Auth from './scenes/Auth';
import NavBar from './components/NavBar';
import SideMenuWrapper from './components/SideMenuWrapper';
import Loading from './components/Loading';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = null;
  }

  componentDidMount() {
    this.onSubscribe  = this.onSubscribe.bind(this);
    this.logOut       = this.logOut.bind(this);
    this.handleErr    = this.handleErr.bind(this);
    this.resetTo      = this.resetTo.bind(this);

    getStorage()
      .then(store => {
        this.store = store;
        this.store.subscribe(this.onSubscribe);
        this.setState(this.store.getState());
      })
      .catch(err => {
        console.error(err);
        this.logOut();
        alert('Ошибка инициализации');
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {state} = this;

    const isStoreNotExists = this.store === null;
    if (isStoreNotExists) return false;

    const isStoreNotSaved = state.persist === undefined || state.auth === undefined;
    if (isStoreNotSaved) return true;

    const isStoreUpdated = nextState.persist.rehydrated !== state.persist.rehydrated;
    const isAuthStatusChanged = nextState.auth.isAuthenticated !== state.auth.isAuthenticated;

    return  isStoreUpdated || isAuthStatusChanged;
  }

  onSubscribe() {
    const state = this.store.getState();
    this.setState(state, this.handleErr);
  }

  handleErr() {
    const {errors: {unseen}} = this.state;
    const errObj = unseen[unseen.length - 1];

    if (!errObj) return;

    InteractionManager.runAfterInteractions(() => {
      alert(errObj.err.message);
      this.store.dispatch(showError());
    });
  }

  logOut() {
    this.store.dispatch(logOut());
    clearStorage();
  }

  resetTo(route) {
    this.navigator.resetTo(route);
  }

  renderScene(route, navigator) {
    const Component = route.component;
    return <Component {...route.props} navigator={navigator}/>;
  }

  renderLoading() {
    return (
      <Loading>
        Загрузка
      </Loading>
    );
  }

  renderAuth() {
    return (
      <Provider store={this.store}>
        <Auth/>
      </Provider>
    );
  }

  renderApp() {
    return (
      <Provider store={this.store}>
        <SideMenuWrapper
          logOut      = {this.logOut}
          onMenuClick = {this.resetTo}
        >
          <Navigator
            ref           = {ref => this.navigator = ref}
            initialRoute  = {routes.page0}
            renderScene   = {this.renderScene}
            navigationBar = {<NavBar/>}
          />
        </SideMenuWrapper>
      </Provider>
    );
  }

  render() {
    if (!this.store) {
      return this.renderLoading();
    }

    const {persist} = this.state;
    if (!persist.rehydrated) {
      return this.renderLoading();
    }

    const {auth} = this.state;
    if (!auth.isAuthenticated) {
      return this.renderAuth();
    }

    return this.renderApp();
  }
}
