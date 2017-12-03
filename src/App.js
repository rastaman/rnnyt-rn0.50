import React from 'react';
import { Provider } from 'react-redux';
import NavContainer from './containers/NavContainer';
import createStore from './createStore';
import { StatusBar } from 'react-native';

const store = createStore();

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default () => (
  <Provider store={store}>
    <NavContainer />
  </Provider>
);
