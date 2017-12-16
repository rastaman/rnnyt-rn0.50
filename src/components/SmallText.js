import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextStylePropTypes } from 'react-native';
import AppText from './AppText';

class SmallText extends Component {
  render() {
    const { children, style, ...rest } = this.props;
    return (
      <AppText style={[styles.small, style]} {...rest}>
        {children}
      </AppText>
    );
  }
}

SmallText.propTypes = {
  children: PropTypes.node.isRequired,
  style: TextStylePropTypes
};

SmallText.defaultProps = {
  style: null
};

const styles = StyleSheet.create({
  small: {
    fontSize: 11
  }
});

export default SmallText;
