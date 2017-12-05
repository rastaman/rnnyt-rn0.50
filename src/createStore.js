import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import newsFeedReducer from './reducers/newsFeedReducer';
import navigationReducer from './reducers/navigationReducer';
import tabsNavigationReducer from './reducers/tabsNavigationReducer';
import modalNavigationReducer from './reducers/modalReducer';
import searchTermReducer from './reducers/searchTermReducer';
import bookmarkReducer from './reducers/bookmarkReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      news: newsFeedReducer,
      searchTerm: searchTermReducer,
      nav: navigationReducer,
      tabs: tabsNavigationReducer,
      modal: modalNavigationReducer,
      bookmarks: bookmarkReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
