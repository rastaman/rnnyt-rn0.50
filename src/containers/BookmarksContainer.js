import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookmarkedNewsSelector } from '../selectors/newsSelectors';
import { loadBookmarks, addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state =>
  // console.log('Received state', state);
  ({
    news: bookmarkedNewsSelector(state),
    redux: state
  });

const mapDispatchToProps = dispatch =>
  // console.log('Received dispatch', dispatch);
  bindActionCreators(
    {
      load: loadBookmarks,
      addBookmark
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
