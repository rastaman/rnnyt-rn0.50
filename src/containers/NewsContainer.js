import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { allNewsSelector } from '../selectors/newsSelectors';

import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => {
  //console.log('Received state', state);
  return ({
    news: allNewsSelector(state),
    redux: state
  });
};

const mapDispatchToProps = dispatch => {
  //console.log('Received dispatch', dispatch);
  return (
    bindActionCreators({
      loadNews
    }, dispatch)
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
