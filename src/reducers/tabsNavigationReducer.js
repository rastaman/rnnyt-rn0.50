import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { TabsNavigator } from '../TabsNavigator';

const tabsNavigationReducer = createNavigationReducer(TabsNavigator);
export default tabsNavigationReducer;
