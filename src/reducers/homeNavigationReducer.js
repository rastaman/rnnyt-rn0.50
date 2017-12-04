import HomeNavigator from '../HomeNavigator';

const defaultAction = HomeNavigator.router.getActionForPathAndParams('tabs');
console.log('Default action for Home', defaultAction);
const initialState = HomeNavigator.router.getStateForAction( defaultAction );

export default (state = initialState, action = {}) => {
  console.log(action, state);
  const nextState = HomeNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
