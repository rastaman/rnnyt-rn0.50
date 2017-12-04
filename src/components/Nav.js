import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import AppNavigator from '../AppNavigator';

class Nav extends Component {

  render() {
    //console.log('Nav props', this.props);
    return (
      <AppNavigator
        navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.navigation})}
      />
    );
  }
}

Nav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  navigation: state.nav,
  redux: state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
