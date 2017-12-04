import React from 'react';
//import PropTypes from 'prop-types';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsFeedContainer from './containers/NewsFeedContainer';
import SearchContainer from './containers/SearchContainer';
import NewsItemDetail from './components/NewsItemDetail';

import * as globalStyles from './styles/global';

const BookmarksContainer = () => (
  <Text>Bookmarks</Text>
);

const TabsNavigator = TabNavigator({
  feed: {
    screen: NewsFeedContainer,
    navigationOptions: {
      tabBarLabel: 'Featured',
      tabBarIcon: <Icon size={ 20 } name={ 'feed' } color={ globalStyles.LINK_COLOR } />
    }
  },
  search: {
    screen: SearchContainer,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: <Icon size={ 20 } name={ 'search' } color={ globalStyles.LINK_COLOR } />
    }
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
  }
});

const NewsItemDetailNavigator = StackNavigator({
  newsItemDetail: {
    screen: NewsItemDetail
  }
});

const HomeNavigator = StackNavigator({
  tabs: {
    screen: TabsNavigator
  },
  feedDetail: {
    screen: NewsItemDetailNavigator
  }
},
{
  mode: 'modal',
  headerMode: 'none'
});

export { TabsNavigator, NewsItemDetailNavigator };
export default HomeNavigator;
