import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TextStylePropTypes } from 'react-native';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title = ({ style, children }) => (
  <AppText style={[styles.title, style]}>{children}</AppText>
);

Title.propTypes = {
  style: TextStylePropTypes,
  children: PropTypes.node.isRequired
};

Title.defaultProps = {
  style: null
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    color: globalStyles.HEADER_TEXT_COLOR,
    backgroundColor: `${globalStyles.BG_COLOR}99`
  }
});

export default Title;
