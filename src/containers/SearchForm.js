import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
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
)(SearchForm);