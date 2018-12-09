import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { TabsNavigator } from '../TabsNavigator';
import * as globalStyles from '../styles/global';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'RNNYT',
    headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
  };

  render() {
    console.log('Tab current navigation', this.props.navigation);
    return (
      <TabsNavigator
        screenProps={{ rootNavigation: this.props.navigation }}
        navigation={this.props.navigation}
      />
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect()(HomeScreen);
