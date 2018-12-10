import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import PropTypes from 'prop-types';

import { TabsNavigator } from '../TabsNavigator';
import * as globalStyles from '../styles/global';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'RNNYT',
    headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
  };

  render() {
    const { navigation } = this.props;
    const Tabs = reduxifyNavigator(TabsNavigator, 'tabs');
    const mapStateToProps = state => {
      console.log('Send state', state);
      return {
        state: state.tabs
      };
    };

    const TabsWithNavigationState = connect(mapStateToProps)(Tabs);

    console.log('Tab current navigation', navigation);
    return (
      <TabsWithNavigationState screenProps={{ rootNavigation: navigation }} />
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default connect()(HomeScreen);
