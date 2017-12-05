import { TabsNavigator } from '../TabsNavigator';

const initialState = TabsNavigator.router.getStateForAction(
  TabsNavigator.router.getActionForPathAndParams('feed'));

export default (state = initialState, action = {}) => {
  const nextState = TabsNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
