import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends PureComponent {
  constructor(props) {
    super(props);
    this.onLongPress = this.onLongPress.bind(this);
  }

  onLongPress() {
    this.ActionSheet.show();
  }

  render() {
    const {
      style,
      imageUrl,
      title,
      author,
      date,
      location,
      description,
      onPress
    } = this.props;
    const accentColor =
      globalStyles.ACCENT_COLORS[
        this.props.index % globalStyles.ACCENT_COLORS.length
      ];

    return (
      <View>
        <TouchableOpacity
          style={style}
          onPress={onPress}
          onLongPress={this.onLongPress}
        >
          <View>
            <Thumbnail
              url={imageUrl}
              titleText={title}
              accentColor={accentColor}
              style={styles.thumbnail}
            />
            <View style={styles.content}>
              <Byline author={author} date={date} location={location} />
              <AppText>{description}</AppText>
            </View>
          </View>
        </TouchableOpacity>
        <ActionSheet
          ref={o => {
            this.ActionSheet = o;
          }}
          title={this.props.title}
          options={['Bookmark', 'Cancel']}
          cancelButtonIndex={1}
          destructiveButtonIndex={2}
          onPress={buttonIndex => {
            if (buttonIndex === 0) {
              this.props.onBookmark();
            }
          }}
        />
      </View>
    );
  }
}

NewsItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  location: PropTypes.string,
  index: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  onBookmark: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ])
};

NewsItem.defaultProps = {
  imageUrl: null,
  description: null,
  location: null,
  style: null
};

const styles = StyleSheet.create({
  thumbnail: {
    marginBottom: 5
  },
  content: {
    paddingHorizontal: 5
  }
});
