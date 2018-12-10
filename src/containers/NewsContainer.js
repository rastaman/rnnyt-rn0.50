import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { allNewsSelector } from '../selectors/newsSelectors';
import { addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state =>
  // console.log('Received state', state);
  ({
    news: allNewsSelector(state),
    redux: state
  });

const mapDispatchToProps = dispatch =>
  // console.log('Received dispatch', dispatch);
  bindActionCreators(
    {
      load: loadNews,
      addBookmark
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
