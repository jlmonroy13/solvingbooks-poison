import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import { setImageReady } from '../actions/searcher';

const mapDispatchToProps = dispatch => ({
  onSetImageState: (imageState) => {
    dispatch(setImageReady(imageState));
  },
});

export default connect(
  null ,
  mapDispatchToProps,
)(Searcher);
