import { StackNavigator } from 'react-navigation';

import IntroScreen from './components/IntroScreen';
import ModalNavigator from './ModalNavigator';

const AppNavigator = StackNavigator({
  home: {
    screen: ModalNavigator
  },
  intro: {
    screen: IntroScreen
  }
});

export default AppNavigator;
