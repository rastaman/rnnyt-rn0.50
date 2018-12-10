import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { ParentModalNavigator } from '../TabsNavigator';

const modalReducer = createNavigationReducer(ParentModalNavigator);
export default modalReducer;
