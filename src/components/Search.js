import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';

import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';

class Search extends Component {
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
    const { filteredNews, navigation, screenProps, addBookmark } = this.props;
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={this.searchNews}
            value={this.state.searchText}
            placeholder="Search"
            placeholderTextColor={globalStyles.MUTED_COLOR}
          />
        </View>
        <NewsFeed
          news={filteredNews}
          listStyles={{}}
          navigation={navigation}
          screenProps={screenProps}
          showLoadingSpinner={false}
          addBookmark={addBookmark}
        />
      </View>
    );
  }
}

Search.propTypes = {
  filteredNews: PropTypes.arrayOf(PropTypes.object),
  searchNews: PropTypes.func.isRequired,
  addBookmark: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  screenProps: PropTypes.objectOf(PropTypes.any)
};

Search.defaultProps = {
  filteredNews: null,
  screenProps: null
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
