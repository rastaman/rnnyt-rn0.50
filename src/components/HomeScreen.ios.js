import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  Alert,
  Vibration,
  StatusBar
} from 'react-native';

import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import * as globalStyles from '../styles/global';

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsFeed'
    };
  }

  showBookmarkAlert() {
    Vibration.vibrate();
    Alert.alert(
      'Coming Soon!',
      'We\'re hard at work on this feature, check back in the near future.',
      [
        { text: 'OK', onPress: () => console.log('User pressed OK') }
      ]
    );
  }

  render() {
    return (
      <TabBarIOS
        barTintColor={globalStyles.BAR_COLOR}
        tintColor={globalStyles.LINK_COLOR}
        translucent={false}
      >
        <TabBarIOS.Item selected={this.state.tab === 'newsFeed'}
          systemIcon={'featured'}
          onPress={() => this.setState({ tab: 'newsFeed' })}
          badge={4}
        >
          <NewsFeedContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item selected={this.state.tab === 'search'}
          systemIcon={'search'}
          onPress={() => this.setState({ tab: 'search' })}
        >
          <SearchContainer />
        </TabBarIOS.Item>
        <TabBarIOS.Item selected={this.state.tab === 'bookmarks'}
          systemIcon={'bookmarks'}
          onPress={() => this.showBookmarkAlert()}
        >
          <Text>Bookmarks</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
