import { connect } from 'react-redux';
import InitialSearch from '../components/InitialSearch';
import { setModalState } from '../actions/authentication';
import ObjectUtils from '../utils/object';

const mapStateToProps = (state) => {
  const { authentication, solutionManuals } = state;
  const solutionManualsArr = ObjectUtils.toArray(solutionManuals);

  return {
    authentication,
    solutionManuals: solutionManualsArr,
  };
};

const mapDispatchToProps = dispatch => ({
  onSetModalState: (status) => {
    dispatch(setModalState(status));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialSearch);
