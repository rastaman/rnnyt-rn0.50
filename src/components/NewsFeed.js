import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListView,
  StyleSheet,
  View,
  RefreshControl,
  ActivityIndicator,
  NetInfo
} from 'react-native';

import NewsItem from './NewsItem';

import AppText from './AppText';
import * as globalStyles from '../styles/global';

class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      initialLoading: true,
      refreshing: false,
      connected: true
    };
    this.renderRow = this.renderRow.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
  }

  componentWillMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.news),
      initialLoading: false
    });
  }

  componentDidUpdate() {
    //console.log('Component did update');
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('change', this.handleConnectivityChange);
  }

  handleConnectivityChange(isConnected) {
    this.setState({
      connected: isConnected
    });
    if (isConnected) {
      this.refresh();
    }
  }


  refresh() {
    if (this.props.load) {
      this.props.load();
    }
  }

  renderRow(rowData, ...rest) {
    const index = parseInt(rest[1], 10);
    const { rootNavigation } = this.props.screenProps;
    return (
      <NewsItem
        style={styles.newsItem}
        index={index}
        onPress={() => {
          return rootNavigation.navigate('detail', { modalUrl: rowData.url });
        }}
        onBookmark={() => this.props.addBookmark( rowData.url )}
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
    if (!this.state.connected) {
      return (
        <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.loadingContainer]}>
          <AppText>No Connection</AppText>
        </View>
      );
    }
    if (initialLoading && showLoadingSpinner) {
      return (
        <View style={[listStyles, styles.loadingContainer]}>
          <ActivityIndicator
            animating={true}
            size="small"
            {...this.props}
          />
        </View>
      );
    }
    return (
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
          initialListSize={4}
        />
      </View>
    );
  }
}

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object),
  listStyles: View.propTypes.style,
  load: PropTypes.func,
  showLoadingSpinner: PropTypes.bool,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  screenProps: PropTypes.objectOf(PropTypes.any),
  addBookmark: PropTypes.func.isRequired
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
