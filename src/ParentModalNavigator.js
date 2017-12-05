import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen.ios';
import NewsDetail from './components/NewsDetail';

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

export default ParentModalNavigator;
