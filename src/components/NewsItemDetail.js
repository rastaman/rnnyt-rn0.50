import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  WebView
} from 'react-native';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

const NewsItemDetail = ({ navigation, modalUrl }) => (
  <View style={styles.modalContent}>
    <TouchableOpacity onPress={() => navigation.navigate('tabs')} style={styles.closeButton}>
      <SmallText>Close</SmallText>
    </TouchableOpacity>
    <WebView scalesPageToFit={true} source={{ uri: modalUrl }} />
  </View>
);

NewsItemDetail.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
  modalUrl: PropTypes.string
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});

export default NewsItemDetail;
