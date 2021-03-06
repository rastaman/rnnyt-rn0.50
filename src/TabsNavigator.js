import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsContainer from './containers/NewsContainer';
import SearchContainer from './containers/SearchContainer';
import BookmarksContainer from './containers/BookmarksContainer';
import HomeScreen from './components/HomeScreen';
import NewsDetail from './components/NewsDetail';
import Profile from './components/Profile';

import * as globalStyles from './styles/global';

const ParentModalNavigator = createStackNavigator(
  {
    main: {
      screen: HomeScreen
    },
    detail: {
      screen: NewsDetail
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'main'
  }
);

const TabsNavigator = createBottomTabNavigator(
  {
    feed: {
      screen: NewsContainer,
      navigationOptions: {
        tabBarLabel: 'Featured',
        tabBarIcon: (
          <Icon size={20} name="feed" color={globalStyles.LINK_COLOR} />
        )
      }
    },
    search: {
      screen: SearchContainer,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: (
          <Icon size={20} name="search" color={globalStyles.LINK_COLOR} />
        )
      }
    },
    bookmarks: {
      screen: BookmarksContainer,
      navigationOptions: {
        tabBarLabel: 'Bookmark',
        tabBarIcon: (
          <Icon size={20} name="bookmark" color={globalStyles.LINK_COLOR} />
        )
      }
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: (
          <Icon size={20} name="user" color={globalStyles.LINK_COLOR} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: { backgroundColor: globalStyles.BG_COLOR }
    },
    lazy: true,
    headerMode: 'screen',
    initialRouteName: 'feed',
    initialRouteParams: {},
    currentNavProp: 'tabs'
  }
);

const SideNavigator = createDrawerNavigator(
  {
    feed: {
      screen: NewsContainer,
      navigationOptions: {
        drawerLabel: 'Featured',
        drawerIcon: (
          <Icon size={20} name="feed" color={globalStyles.LINK_COLOR} />
        )
      }
    },
    search: {
      screen: SearchContainer,
      navigationOptions: {
        drawerLabel: 'Search',
        drawerIcon: (
          <Icon size={20} name="search" color={globalStyles.LINK_COLOR} />
        )
      }
    },
    bookmarks: {
      screen: BookmarksContainer,
      navigationOptions: {
        drawerLabel: 'Bookmark',
        drawerIcon: (
          <Icon size={20} name="bookmark" color={globalStyles.LINK_COLOR} />
        )
      }
    }
  },
  {
    initialRouteName: 'feed'
  }
);

export { TabsNavigator, ParentModalNavigator, SideNavigator };
