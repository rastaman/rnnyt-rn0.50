import { NewsItemDetailNavigator } from '../HomeNavigator';

const initialState = NewsItemDetailNavigator.router.getStateForAction(
  NewsItemDetailNavigator.router.getActionForPathAndParams('newsItemDetail'));

export default (state = initialState, action = {}) => {
  console.log(action,state);
  const nextState = NewsItemDetailNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
