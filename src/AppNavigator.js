import { StackNavigator } from 'react-navigation';

import * as globalStyles from './styles/global';
import TabsContainer from './containers/TabsContainer';
import IntroScreen from './components/IntroScreen';

const AppNavigator = StackNavigator({
  home: {
    screen: TabsContainer,
    navigationOptions: {
      headerTitle: 'RNNYT',
      headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
    }
  },
  intro: {
    screen: IntroScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
      headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
    }
  }
});

export default AppNavigator;
