import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import NewsContainer from './containers/NewsContainer';
import SearchContainer from './containers/SearchContainer';
import BookmarksContainer from './containers/BookmarksContainer';
import HomeScreen from './components/HomeScreen';
import NewsDetail from './components/NewsDetail';

import * as globalStyles from './styles/global';

const ParentModalNavigator = StackNavigator({
  main: {
    screen: HomeScreen
  },
  detail: {
    screen: NewsDetail
  }
},{
  mode: 'modal',
  headerMode: 'none'
});

const TabsNavigator = TabNavigator({
  feed: {
    screen: NewsContainer,
    navigationOptions: {
      tabBarLabel: 'Featured',
      tabBarIcon: <Icon size={ 20 } name={ 'feed' } color={ globalStyles.LINK_COLOR } />
    }
  },
  search: {
    screen: SearchContainer
  },
  bookmarks: {
    screen: BookmarksContainer,
    navigationOptions: {
      tabBarLabel: 'Bookmark',
      tabBarIcon: <Icon size={ 20 } name={ 'bookmark' } color={ globalStyles.LINK_COLOR } />
    }
  }
}, {
  tabBarOptions: {
    style: { backgroundColor: globalStyles.BG_COLOR }
  },
  lazy: true,
  headerMode: 'screen'
});

export { TabsNavigator, ParentModalNavigator };
