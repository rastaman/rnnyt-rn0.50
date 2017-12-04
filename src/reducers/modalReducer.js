import ModalNavigator from '../ModalNavigator';

const initialState = ModalNavigator.router.getStateForAction(
  ModalNavigator.router.getActionForPathAndParams('homeModal'));

export default (state = initialState, action = {}) => {
  const nextState = ModalNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
