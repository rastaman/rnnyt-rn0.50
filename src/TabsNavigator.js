import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import NewsContainer from './containers/NewsContainer';
import SearchContainer from './containers/SearchContainer';
import BookmarksContainer from './containers/BookmarksContainer';
import HomeScreen from './components/HomeScreen';
import NewsDetail from './components/NewsDetail';
import Profile from './components/Profile';

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
  },
  profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: <Icon size={ 20 } name={ 'user' } color={ globalStyles.LINK_COLOR } />
    }
  }
}, {
  tabBarOptions: {
    style: { backgroundColor: globalStyles.BG_COLOR }
  },
  lazy: true,
  headerMode: 'screen'
});

const SideNavigator = DrawerNavigator({
  feed: {
    screen: NewsContainer,
    navigationOptions: {
      drawerLabel: 'Featured',
      drawerIcon: <Icon size={ 20 } name={ 'feed' } color={ globalStyles.LINK_COLOR } />
    }
  },
  search: {
    screen: SearchContainer,
    navigationOptions: {
      drawerLabel: 'Search',
      drawerIcon: <Icon size={ 20 } name={ 'search' } color={ globalStyles.LINK_COLOR } />
    }
  },
  bookmarks: {
    screen: BookmarksContainer,
    navigationOptions: {
      drawerLabel: 'Bookmark',
      drawerIcon: <Icon size={ 20 } name={ 'bookmark' } color={ globalStyles.LINK_COLOR } />
    }
  }
},{
  initialRouteName: 'feed'
});

export { TabsNavigator, ParentModalNavigator, SideNavigator };
