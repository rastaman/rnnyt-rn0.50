import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import * as globalStyles from '../styles/global';

const AppText = ({ children, style, ...rest }) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

AppText.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired
};

AppText.defaultProps = {
  style: null
};

export default AppText;
