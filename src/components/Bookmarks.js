import React from 'react';
//import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as globalStyles from '../styles/global';

class Bookmarks extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Bookmark',
    tabBarIcon: <Icon size={ 20 } name={ 'bookmark' } color={ globalStyles.LINK_COLOR } />
  }

  render() {
    return(
      <Text>Bookmarks</Text>
    );
  }
}

export default Bookmarks;
