import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  WebView,
  Linking
} from 'react-native';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

class NewsDetail extends React.Component{
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;
    const { modalUrl } = this.props.navigation.state.params;
    return (
      <View style={styles.modalContent}>
        <View style={styles.modalButtons}>
          <TouchableOpacity onPress={() => navigation.goBack(null)}>
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(modalUrl)}>
            <SmallText>Open in Browser</SmallText>
          </TouchableOpacity>
        </View>
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
  modalButtons: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default NewsDetail;
