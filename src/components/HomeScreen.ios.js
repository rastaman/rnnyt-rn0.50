import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Vibration
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation';

import HomeNavigator from '../HomeNavigator';

class HomeScreen extends Component {

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
    console.log('HomeScreen Props', this.props);
    return (
      <HomeNavigator
        navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.homeNavigation})}
      />
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  homeNavigation: PropTypes.objectOf(PropTypes.any)
};

/*const mapStateToProps = (state) => ({
  homeNavigation: state.homeNavigation,
  redux: state
});*/

export default HomeScreen;
