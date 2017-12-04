import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { allNewsSelector } from '../selectors/newsSelectors';
import NewsFeed from '../components/NewsFeed';

const mapStateToProps = state => ({
  news: allNewsSelector(state),
  modalUrl: state.modalUrl,
  modalNavigation: state.modalNavigation,
  redux: state
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadNews
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
