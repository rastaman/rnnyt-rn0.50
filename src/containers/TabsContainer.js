import { connect } from 'react-redux';
import HomeScreen from '../components/HomeScreen.ios';

const mapStateToProps = state => ({
  navigation: state.tabsNavigation
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
