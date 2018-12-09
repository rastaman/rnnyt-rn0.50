import React from 'react';
import { StatusBar } from 'react-native';
import { Provider, connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

// import Nav from './components/Nav';
import AppNavigator from './AppNavigator';
import createStore from './createStore';

const store = createStore();

const App = reduxifyNavigator(AppNavigator, 'root');
const mapStateToProps = state => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
