import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/newsActions';
import { searchNewsSelector } from '../selectors/newsSelectors';
import { addBookmark } from '../actions/bookmarkActions';

import Search from '../components/Search';

const mapStateToProps = state => ({
  filteredNews: searchNewsSelector(state),
  redux: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchNews,
      addBookmark
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
