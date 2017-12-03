import React from 'react';
import PropTypes from 'prop-types';
import { TabNavigator } from 'react-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsFeedContainer from './containers/NewsFeedContainer';
import SearchContainer from './containers/SearchContainer';

import * as globalStyles from './styles/global';

/*
<TabBarIOS.Item selected={this.state.tab === 'newsFeed'}
  systemIcon={'featured'}
  onPress={() => this.setState({ tab: 'newsFeed' })}
  badge={4}
>
  <NewsFeedContainer />
</TabBarIOS.Item>
<TabBarIOS.Item selected={this.state.tab === 'search'}
  systemIcon={'search'}
  onPress={() => this.setState({ tab: 'search' })}
>
  <SearchContainer />
</TabBarIOS.Item>
<TabBarIOS.Item selected={this.state.tab === 'bookmarks'}
  systemIcon={'bookmarks'}
  onPress={() => this.showBookmarkAlert()}
>
</TabBarIOS.Item>
*/

const BookmarksContainer = () => (
  <Text>Bookmarks</Text>
);

const TabsNavigator = TabNavigator({
  feed: {
    screen: () => <NewsFeedContainer />,
    navigationOptions: {
      tabBarLabel: 'Featured',
      tabBarIcon: <Icon size={ 20 } name={ 'feed' } color={ globalStyles.LINK_COLOR } />
    }
  },
  search: {
    screen: () => <SearchContainer />,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: <Icon size={ 20 } name={ 'search' } color={ globalStyles.LINK_COLOR } />
    }
  },
  bookmarks: {
    screen: () => <BookmarksContainer />,
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

export default TabsNavigator;
