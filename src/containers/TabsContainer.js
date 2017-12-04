import { connect } from 'react-redux';
import HomeScreen from '../components/HomeScreen.ios';

const mapStateToProps = state => ({
  navigation: state.navigation,
  tabsNavigation: state.tabsNavigation,
  modalNavigation: state.modalNavigation,
  homeNavigation: state.homeNavigation,
  redux: state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
