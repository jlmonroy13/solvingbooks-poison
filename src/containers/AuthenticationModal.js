import { connect } from 'react-redux';
import AthenticationModal from '../components/AuthenticationModal';
import { setModalState, createUser, logIn } from '../actions/authentication';


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
  onCreateUser: (credentials, profile) => {
    dispatch(createUser(credentials, profile));
  },
  onLogIn: (credentials) => {
    dispatch(logIn(credentials));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AthenticationModal);