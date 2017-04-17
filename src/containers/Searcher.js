import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import { setImageUrl, setSelections, getSolutionManual, setSolutionManual } from '../actions/searcher';
import { setStatusRequestFalse, setStatusRequestTrue } from '../actions/spinner';
import { setModalState } from '../actions/authentication';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const { solutionManuals, searcher: { solutionManual } } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
    solutionManualsObj: solutionManuals,
    solutionManual,
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
  onGetSolutionManual: (solutionManualId) => {
    dispatch(getSolutionManual(solutionManualId));
  },
  onSetSolutionManual: (solutionManual) => {
    dispatch(setSolutionManual(solutionManual));
  },
  onSetSelections: (obj) => {
    dispatch(setSelections(obj));
  },
  onSetModalState: (status) => {
    dispatch(setModalState(status));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Searcher);

