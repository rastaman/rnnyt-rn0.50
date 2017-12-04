import  { TabsNavigator } from '../HomeNavigator';

const initialState = TabsNavigator.router.getStateForAction(
  TabsNavigator.router.getActionForPathAndParams('feed'));

export default (state = initialState, action = {}) => {
  const nextState = TabsNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
