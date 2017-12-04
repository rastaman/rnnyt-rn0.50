import { StackNavigator } from 'react-navigation';

//import HomeScreen from './components/HomeScreen.ios';
import NewsContainer from './containers/NewsContainer';
import NewsDetail from './components/NewsDetail';

const ModalNavigator = StackNavigator({
  newsfeed: {
    screen: NewsContainer
  },
  detail: {
    screen: NewsDetail
  }
},{
  mode: 'modal',
  headerMode: 'none'
});

export default ModalNavigator;
