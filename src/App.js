import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import createStore from './createStore';

const store = createStore();

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);
