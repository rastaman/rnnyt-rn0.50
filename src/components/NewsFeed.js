import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListView,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import NewsItem from './NewsItem.ios';

import * as globalStyles from '../styles/global';

class NewsFeed extends Component {

  static navigationOptions = {
    tabBarLabel: 'Featured',
    tabBarIcon: <Icon size={ 20 } name={ 'feed' } color={ globalStyles.LINK_COLOR } />
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      initialLoading: true,
      refreshing: false
    };
    this.renderRow = this.renderRow.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
      initialLoading: false
    });
  }

  refresh() {
    if (this.props.loadNews) {
      this.props.loadNews();
    }
  }

  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    const { navigation } = this.props;
    return (
      <NewsItem
        style={styles.newsItem}
        index={index}
        onPress={() => navigation.navigate('detail', { modalUrl: rowData.url })}
        {...rowData}
      />
    );
  }

  render() {
    const {
      listStyles = globalStyles.COMMON_STYLES.pageContainer,
      showLoadingSpinner
    } = this.props;
    const { initialLoading, refreshing, dataSource } = this.state;
    return (
      (initialLoading && showLoadingSpinner
        ? (
          <View style={[listStyles, styles.loadingContainer]}>
            <ActivityIndicator
              animating={true}
              size="small"
              {...this.props}
            />
          </View>
        ) : (
          <View style={styles.container}>
            <ListView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={this.refresh}
                /> }
              enableEmptySections={true}
              dataSource={dataSource}
              renderRow={this.renderRow}
              style={this.props.listStyles}
            />
          </View>
        )
      )
    );
  }
}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style,
  loadNews: PropTypes.func,
  showLoadingSpinner: PropTypes.bool,
  dispatch: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  redux: PropTypes.objectOf(PropTypes.any)
};

NewsFeed.defaultProps = {
  showLoadingSpinner: true
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: globalStyles.BG_COLOR
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NewsFeed;
