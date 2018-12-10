import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

import newsFeedReducer from './reducers/newsFeedReducer';
import navigationReducer from './reducers/navigationReducer';
import tabsNavigationReducer from './reducers/tabsNavigationReducer';
import modalNavigationReducer from './reducers/modalReducer';
import searchTermReducer from './reducers/searchTermReducer';
import bookmarkReducer from './reducers/bookmarkReducer';

const logger = createLogger();

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const tabsNavigationMiddleware = createReactNavigationReduxMiddleware(
  'tabs',
  state => state.tabs
);

const appReducer = combineReducers({
  news: newsFeedReducer,
  searchTerm: searchTermReducer,
  nav: navigationReducer,
  tabs: tabsNavigationReducer,
  modal: modalNavigationReducer,
  bookmarks: bookmarkReducer
});

export default (initialState = {}) =>
  createStore(
    appReducer,
    initialState,
    applyMiddleware(
      logger,
      promiseMiddleware,
      navigationMiddleware,
      tabsNavigationMiddleware
    )
  );
