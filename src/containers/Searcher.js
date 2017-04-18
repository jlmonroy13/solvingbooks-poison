import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import { setImageUrl, setSelections, getSolutionManual, setSolutionManual, addNumberOfSearches } from '../actions/searcher';
import { setStatusRequestFalse, setStatusRequestTrue } from '../actions/spinner';
import { setModalState, logOut, authFirebaseListener } from '../actions/authentication';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const {
    solutionManuals,
    searcher: { solutionManual, numberOfsearches },
    authentication: { isUserLogged },
  } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
    solutionManualsObj: solutionManuals,
    solutionManual,
    isUserLogged,
    numberOfsearches,
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
  onLogOut: () => {
    dispatch(logOut());
  },
  onAuthFirebaseListener: () => {
    dispatch(authFirebaseListener());
  },
  onAddNumberOfSearches: () => {
    dispatch(addNumberOfSearches());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Searcher);

