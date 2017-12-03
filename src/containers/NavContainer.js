import { connect } from 'react-redux';
import Nav from '../components/Nav';

const mapStateToProps = state => ({
  navigation: state.navigation
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
