import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import HomeScreen from './HomeScreen.ios';
import Title from './Title';
import IntroScreen from './IntroScreen';
import SmallText from './SmallText';

import * as globalStyles from '../styles/global';

const HOME_ROUTE = {
  title: 'RNNYT',
  component: HomeScreen
};

const INTRO_ROUTE = {
  title: 'Welcome',
  component: IntroScreen,
  props: {
    nextScene: HOME_ROUTE
  }
};

export default class Nav extends Component {

  renderScene(route, navigator) {
    return (
      <route.component
        {...route.props}
        navigator={navigator}
        key="scene"
      />);
  }

  renderLeftButton(route, navigator, index) {
    if (index === 0) {
      return null;
    }
    return (
      <TouchableOpacity
        style={styles.leftButton}
        onPress={() => navigator.pop()}
        key="left-button"
      >
        <SmallText>Back</SmallText>
      </TouchableOpacity>
    );
  }

  renderTitle(route) {
    return (
      <Title style={styles.title} key="title">
        {route.title}
      </Title>
    );
  }

  renderNavigationBar() {
    //
    //          RightButton: this.renderRightButton,
    return (
      <Navigator.NavigationBar key="nav-bar"
        routeMapper={{
          LeftButton: this.renderLeftButton,
          RightButton: () => null,
          Title: this.renderTitle
        }}
        style={styles.navbar}
      /> );
  }

  render() {
    return (
      <Navigator
        initialRoute={INTRO_ROUTE}
        renderScene={this.renderScene}
        navigationBar={this.renderNavigationBar()}
      /> );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: globalStyles.MUTED_COLOR
  },
  leftButton: {
    padding: 12
  },
  title: {
    padding: 8,
    backgroundColor: globalStyles.MUTED_COLOR
  }
});
