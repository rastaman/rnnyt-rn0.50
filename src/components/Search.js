import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: <Icon size={ 20 } name={ 'search' } color={ globalStyles.LINK_COLOR } />
  }

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.searchNews = this.searchNews.bind(this);
  }

  searchNews(text) {
    this.setState({ searchText: text });
    this.props.searchNews(text);
  }

  render() {
    const { filteredNews, navigation } = this.props;
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <View style={styles.search}>
          <TextInput style={styles.input}
            onChangeText={this.searchNews}
            value={this.state.searchText}
            placeholder={'Search'}
            placeholderTextColor={globalStyles.MUTED_COLOR}
          />
        </View>
        <NewsFeed
          news={filteredNews}
          listStyles={{}}
          navigation={navigation}
          showLoadingSpinner={false}
        />
      </View>
    );
  }
}

Search.propTypes = {
  filteredNews: PropTypes.arrayOf(PropTypes.object),
  searchNews: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  redux: PropTypes.objectOf(PropTypes.any)
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    color: globalStyles.TEXT_COLOR,
    paddingHorizontal: 5,
    flex: 1
  },
  search: {
    borderColor: globalStyles.MUTED_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
});

export default Search;
