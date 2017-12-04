import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen.ios';
import NewsDetail from './components/NewsDetail';

const ModalNavigator = StackNavigator({
  homeModal: {
    screen: HomeScreen
  },
  detail: {
    screen: NewsDetail
  }
},{
  mode: 'modal',
  headerMode: 'none'
});

export default ModalNavigator;
