import { connect } from 'react-redux';
import InitialSearch from '../components/InitialSearch';
import { setStatusRequestTrue } from '../actions/spinner';
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
  onSetStatusRequestTrue: () => {
    dispatch(setStatusRequestTrue());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InitialSearch);
