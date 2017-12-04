//import React from 'react';
//import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';

//import NewsFeed from './components/NewsFeed';
import ModalNavigator from './ModalNavigator';
import SearchContainer from './containers/SearchContainer';
import Bookmarks from './components/Bookmarks';

import * as globalStyles from './styles/global';

const TabsNavigator = TabNavigator({
  feed: {
    screen: ModalNavigator
  },
  search: {
    screen: SearchContainer
  },
  bookmarks: {
    screen: Bookmarks
  }
}, {
  tabBarOptions: {
    style: { backgroundColor: globalStyles.BG_COLOR }
  }
});

export default TabsNavigator;
