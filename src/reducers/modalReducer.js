import { ParentModalNavigator } from '../TabsNavigator';

const initialState = ParentModalNavigator.router.getStateForAction(
  ParentModalNavigator.router.getActionForPathAndParams('main')
);

export default (state = initialState, action = {}) => {
  const nextState = ParentModalNavigator.router.getStateForAction(
    action,
    state
  );
  return nextState || state;
};
