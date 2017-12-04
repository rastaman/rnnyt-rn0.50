import { connect } from 'react-redux';
import Nav from '../components/Nav';

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
)(Nav);
