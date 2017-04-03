import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import { setImageUrl } from '../actions/searcher';
import { setStatusRequestFalse, setStatusRequestTrue } from '../actions/solutionManuals';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const { solutionManuals } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetImageUrl: (imageUrl) => {
    dispatch(setImageUrl(imageUrl));
  },
  onSetStatusRequestFalse: () => {
    dispatch(setStatusRequestFalse());
  },
  onSetStatusRequestTrue: () => {
    dispatch(setStatusRequestTrue());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Searcher);
