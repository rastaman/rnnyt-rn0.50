import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

class IntroScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Welcome',
    headerStyle: { backgroundColor: globalStyles.MUTED_COLOR }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={[globalStyles.COMMON_STYLES.pageContainer,
        styles.container]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('home')}
        >
          <Title>React Native News Reader</Title>
          <AppText>
           Start Reading
          </AppText>
        </TouchableOpacity>
      </View>
    );
  }
}

IntroScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any)
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default IntroScreen;
