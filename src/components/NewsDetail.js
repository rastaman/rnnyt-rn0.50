import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  WebView
} from 'react-native';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

class NewsDetail extends React.Component{

  render() {
    const { navigation } = this.props;
    const { modalUrl } = this.props.navigation.state.params;
    console.log('Will display ' + modalUrl, this.props.navigation.state);
    return (
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={() => navigation.navigate('newsfeed')} style={styles.closeButton}>
          <SmallText>Close</SmallText>
        </TouchableOpacity>
        <WebView scalesPageToFit={true} source={{ uri: modalUrl }} />
      </View>
    );
  }

}

NewsDetail.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
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

export default NewsDetail;
