import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Alert,
  Vibration
} from 'react-native';

import { TabsNavigator } from '../TabsNavigator';
import * as globalStyles from '../styles/global';

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'RNNYT',
    headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
  }

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
    //console.log('Tab props', this.props);
    return (
      <TabsNavigator />
    );
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const mapStateToProps = state => ({
//  navigation: state.tabs,
  redux: state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
