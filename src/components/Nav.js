import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import AppNavigator from '../AppNavigator';

export default class Nav extends Component {

  render() {
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
