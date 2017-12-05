import { TabNavigator, StackNavigator } from 'react-navigation';

import NewsContainer from './containers/NewsContainer';
import SearchContainer from './containers/SearchContainer';
import Bookmarks from './components/Bookmarks';
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
    screen: NewsContainer
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
  },
  headerMode: 'screen'
});

export { TabsNavigator, ParentModalNavigator };
