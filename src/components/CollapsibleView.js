import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const CollapsibleView = ({ children, style, hide }) => (
  <View style={[styles.container, hide ? styles.hidden : {}]}>
    <View style={[styles.absoluteContainer, style]}>{children}</View>
  </View>
);

CollapsibleView.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  hide: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

CollapsibleView.defaultProps = {
  style: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  absoluteContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  hidden: {
    height: 0,
    flex: 0
  }
});

export default CollapsibleView;
