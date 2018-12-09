import { createStackNavigator } from 'react-navigation';

import IntroScreen from './components/IntroScreen';
import Onboarding from './components/Onboarding';
import { ParentModalNavigator } from './TabsNavigator';

const routeConfigMap = {
  home: {
    screen: ParentModalNavigator
  },
  intro: {
    screen: IntroScreen,
    navigationOptions: {
      header: null
    }
  },
  onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: null
    }
  }
};

const stackConfig = {
  mode: 'card',
  headerMode: 'screen',
  initialRouteName: 'intro',
  initialRouteParams: {}
};

const AppNavigator = createStackNavigator(routeConfigMap, stackConfig);
export default AppNavigator;
