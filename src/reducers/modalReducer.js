import ModalNavigator from '../ModalNavigator';

const initialState = ModalNavigator.router.getStateForAction(
  ModalNavigator.router.getActionForPathAndParams('newsfeed'));

export default (state = initialState, action = {}) => {
  const nextState = ModalNavigator.router.getStateForAction(action, state);
  return nextState || state;
};
