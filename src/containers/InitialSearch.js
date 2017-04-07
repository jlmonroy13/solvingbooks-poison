import { connect } from 'react-redux';
import InitialSearch from '../components/InitialSearch';
import { setModalState } from '../actions/authentication';
import { setSolutionManual } from '../actions/searcher';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const { authentication, solutionManuals } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    authentication,
    solutionManuals: solutionManualsArr,
    solutionManualsObj: solutionManuals,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetModalState: (status) => {
    dispatch(setModalState(status));
  },
  onSetSolutionManual: (solutionManual) => {
    dispatch(setSolutionManual(solutionManual));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialSearch);
