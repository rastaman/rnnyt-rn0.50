import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Vibration
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import TabsNavigator from '../TabsNavigator';

export default class HomeScreen extends Component {

  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming Soon!',
      'We\'re hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
  }

  render() {
    return (
      <TabsNavigator
        navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.navigation})}
      />
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any)
};
