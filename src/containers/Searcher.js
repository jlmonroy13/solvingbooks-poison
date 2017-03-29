import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import { setImageReady } from '../actions/searcher';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const { solutionManuals } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetImageState: (imageState) => {
    dispatch(setImageReady(imageState));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Searcher);
