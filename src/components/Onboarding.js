import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  LayoutAnimation
} from 'react-native';

import OnboardingButtons from './OnboardingButtons';
import OnboardingPanel from './OnboardingPanel';
import onboardingContent from '../config/onboarding';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.moveNext = this.moveNext.bind(this);
    this.movePrevious = this.movePrevious.bind(this);
    this.transitionToNextPanel = this.transitionToNextPanel.bind(this);
    this.state = {
      currentIndex: 0
    };
  }

  movePrevious() {
    this.transitionToNextPanel(this.state.currentIndex - 1);
  }

  moveNext() {
    this.transitionToNextPanel(this.state.currentIndex + 1);
  }

  transitionToNextPanel(nextIndex) {
    LayoutAnimation.configureNext({
      duration: 3000,
      update: {
        springDamping: 0.2,
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY
      }
    });
    this.setState({
      currentIndex: nextIndex
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.panelContainer}>
            {onboardingContent.map((panel, i) => (
              <OnboardingPanel
                key={i}
                {...panel}
                style={i !== this.state.currentIndex ? styles.hidden : undefined }
              />
            ))}
            {/*<OnboardingPanel {...onboardingContent[this.state.currentIndex]} style={styles.hidden} />*/}
          </View>
          <OnboardingButtons
            totalItems={onboardingContent.length}
            currentIndex={this.state.currentIndex}
            movePrevious={this.movePrevious}
            moveNext={this.moveNext}
          />
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  hidden: {
    width: 0,
    flex: 0
  }
});
