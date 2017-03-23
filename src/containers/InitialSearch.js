import { connect } from 'react-redux';
import InitialSearch from '../components/InitialSearch';
import { setModalState } from '../actions/authentication';

const mapStateToProps = (state) => {
  const { authentication } = state;

  return {
    authentication,
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
