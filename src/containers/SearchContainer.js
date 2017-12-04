import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/newsActions';
import { searchNewsSelector } from '../selectors/newsSelectors';

import Search from '../components/Search';

const mapStateToProps = state => ({
  filteredNews: searchNewsSelector(state),
  //navigation: state.navigation,
  redux: state
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchNews
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
