import { connect } from 'react-redux';
import Searcher from '../components/Searcher';
import { setImageUrl, setSelections, getSolutionManual, setSolutionManual, addNumberOfSearches } from '../actions/searcher';
import { setStatusRequestFalse, setStatusRequestTrue } from '../actions/spinner';
import { setUserSearch } from '../actions/user';
import { setModalState, logOut, authFirebaseListener, setAuthBtnStatus } from '../actions/authentication';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const {
    solutionManuals,
    searcher: { solutionManual, numberOfsearches },
    authentication: { isUserLogged },
    firebase: { _root: { entries } },
  } = state;
  const entries0 = entries[0];
  const photoUrl = entries0[1] ? entries0[1].photoURL : '';

  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    solutionManuals: solutionManualsArr,
    solutionManualsObj: solutionManuals,
    solutionManual,
    isUserLogged,
    numberOfsearches,
    photoUrl,
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
  onSetAuthBtnStatus: (status) => {
    dispatch(setAuthBtnStatus(status));
  },
  onSetUserSearch: (bookName, chapter, subchapter, exercise, date) => {
    dispatch(setUserSearch(bookName, chapter, subchapter, exercise, date));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Searcher);

