import { StackNavigator } from 'react-navigation';

import IntroScreen from './components/IntroScreen';
import Onboarding from './components/Onboarding';
import { ParentModalNavigator } from './TabsNavigator';


const AppNavigator = StackNavigator({
  home: {
    screen: ParentModalNavigator
  },
  intro: {
    screen: IntroScreen
  },
  onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: null
    }
  }
},
{
  mode: 'card',
  headerMode: 'screen'
});

export default AppNavigator;
