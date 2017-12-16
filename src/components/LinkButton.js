import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import Button from './Button';

const LinkButton = ({ style, children, ...rest }) => (
  <Button {...rest} style={[styles.button, style]}>
    {children}
  </Button>
);

LinkButton.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired
};

LinkButton.defaultProps = {
  style: null
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0
  }
});

export default LinkButton;
