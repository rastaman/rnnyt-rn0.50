import { StackNavigator } from 'react-navigation';

import IntroScreen from './components/IntroScreen';
import { ParentModalNavigator } from './TabsNavigator';


const AppNavigator = StackNavigator({
  home: {
    screen: ParentModalNavigator
  },
  intro: {
    screen: IntroScreen
  }
});

export default AppNavigator;
