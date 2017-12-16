import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  InteractionManager
} from 'react-native';
import AppText from './AppText';

class SmallText extends Component {
  constuctor(props) {
    super(props);
  }

  render() {
    const { children, style, ...rest } = this.props;
    return (
      <AppText style={[styles.small, style]} {...rest}>
        {children}
      </AppText>
    );
  }
}
//({ children, style, ...rest }) =>

SmallText.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style
};

const styles = StyleSheet.create({
  small: {
    fontSize: 11
  }
});

export default SmallText;
