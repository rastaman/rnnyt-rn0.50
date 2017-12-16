import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Assets from '@assets/assets';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

class IntroScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Welcome',
    headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
  };

  render() {
    const { navigation } = this.props;
    return (
      <View
        style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}
      >
        <ImageBackground
          source={Assets.Images.logo}
          style={{ height: '100%', width: '100%' }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('onboarding')}>
            <Title>React Native News Reader</Title>
            <AppText>Start Reading</AppText>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

IntroScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default IntroScreen;
