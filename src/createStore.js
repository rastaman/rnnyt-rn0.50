import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import newsFeedReducer from './reducers/newsFeedReducer';
import navigationReducer from './reducers/navigationReducer';
import tabsNavigationReducer from './reducers/tabsNavigationReducer';
import modalNavigationReducer from './reducers/modalNavigationReducer';
import homeNavigationReducer from './reducers/homeNavigationReducer';
import searchTermReducer from './reducers/searchTermReducer';

const logger = createLogger();

export default (initialState = {}) => (
  createStore(
    combineReducers({
      news: newsFeedReducer,
      searchTerm: searchTermReducer,
      navigation: navigationReducer,
      modalNavigation: modalNavigationReducer,
      tabsNavigation: tabsNavigationReducer,
      homeNavigation: homeNavigationReducer
    }),
    initialState,
    applyMiddleware(logger, promiseMiddleware)
  )
);
