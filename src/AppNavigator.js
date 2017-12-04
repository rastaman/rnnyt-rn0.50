import { StackNavigator } from 'react-navigation';

import IntroScreen from './components/IntroScreen';
import HomeScreen from './components/HomeScreen.ios';
//import ModalNavigator from './ModalNavigator';

const AppNavigator = StackNavigator({
  home: {
    screen: HomeScreen
  },
  intro: {
    screen: IntroScreen
  }
});

export default AppNavigator;
