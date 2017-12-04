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
    const { navigation, modalUrl } = this.props;
    console.log('Display news detail', this);
    return (
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={() => navigation.navigate('homeModal')} style={styles.closeButton}>
          <SmallText>Close</SmallText>
        </TouchableOpacity>
        <WebView scalesPageToFit={true} source={{ uri: modalUrl }} />
      </View>
    );
  }

}

NewsDetail.propTypes = {
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

const mapStateToProps = state => ({
  modalUrl: state.modalUrl
});

const mapDispatchToProps = dispatch => (
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);

//export default NewsDetail;
