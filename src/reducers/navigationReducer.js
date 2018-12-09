import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);
export default navReducer;
