import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import { TextFieldGroup } from './';
import Alert from 'react-s-alert';
import { connect } from 'react-redux'
import { pathToJS } from 'react-redux-firebase'
@connect(
  // Map state to props
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  })
)

class AuthenticationModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      authenticationForm: {
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      isSignUp: true,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onChangeAuthenticationForm = this.onChangeAuthenticationForm.bind(this);
    this.changeLogInSignUp = this.changeLogInSignUp.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleCloseModal() {
    this.props.onSetModalState(false);
  }

  onSubmitForm(e) {
    e.preventDefault();
    const {
      authenticationForm: { userName, email, password, passwordConfirmation},
      isSignUp,
    } = this.state;
    const { onCreateUser, onLogIn } = this.props;

    if(isSignUp) {
      if(!userName, !email, !password, !passwordConfirmation) {
        Alert.error(`Debes llenar todos los campos.`);
      } else if(password !== passwordConfirmation) {
        Alert.error(`Las contraseñas no coinciden.`);
      } else {
        const credentials = { email, password };
        const profile = { username: userName, email };
        onCreateUser(credentials, profile);
      }
    } else {
      if(!email, !password) {
        Alert.error(`Debes llenar todos los campos.`);
      } else {
        const credentials = { email, password };
        onLogIn(credentials);
      }
    }  
  }

  onChangeAuthenticationForm(e) {
    const { state } = this;
    this.setState({
      authenticationForm: {
        ...state.authenticationForm,
        [e.target.name]: e.target.value
      }
    });
  }

  changeLogInSignUp() {
    const { isSignUp } = this.state;
    this.setState({ isSignUp: !isSignUp });
  }

  render() {
    const { isSignUp } = this.state;
    const { authentication } = this.props;
    const authenticationTitle = isSignUp ? 'registrarte' : 'iniciar sesión';
    console.warn(this.props);

    return (
      <ReactModal
        isOpen={authentication.isModalOpen}
        contentLabel="onRequestClose Example"
        className="Modal"
        overlayClassName="modal"
      >
        <div className="modal__content">
          <div className="modal__header">
            <h2 className="modal__header-title">{`Antes debes ${authenticationTitle}`}</h2>
            <span className="modal__btn-close" onClick={this.handleCloseModal}>&#120;</span>
          </div>
          <div className="modal__body">
            <form onSubmit={this.onSubmitForm} autoComplete="off">
              { isSignUp ?
                <TextFieldGroup
                  value={this.state.authenticationForm.userName}
                  onChange={this.onChangeAuthenticationForm}
                  type="text"
                  field="userName"
                  label="Nombre de Usuario"
                />
              : ''}
              <TextFieldGroup
                value={this.state.authenticationForm.email}
                onChange={this.onChangeAuthenticationForm}
                type="email"
                field="email"
                label="Correo"
              />
              <TextFieldGroup
                value={this.state.authenticationForm.password}
                onChange={this.onChangeAuthenticationForm}
                type="password"
                field="password"
                label="Contraseña"
              />
              { isSignUp ?
                <TextFieldGroup
                  value={this.state.authenticationForm.passwordConfirmation}
                  onChange={this.onChangeAuthenticationForm}
                  type="password"
                  field="passwordConfirmation"
                  label="Confirmar Contraseña"
                />
              : ''}
              <button className="button button--gray bold button--full-block push--top">{isSignUp ? 'Registrarse' : 'Ingresar'}</button>
              <p className="modal__body-footer">{isSignUp ? '¿Ya tienes una cuenta? ' : '¿Aún no tienes una cuenta? '}<span className="modal__body-footer-link" onClick={this.changeLogInSignUp}>{isSignUp ? '¡Ingresa ya!' : '¡Registrate!'}</span></p>
            </form>
          </div>
        </div>
      </ReactModal>
    );
  }
}

AuthenticationModal.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
  onLogIn: PropTypes.func.isRequired,
  onCreateUser: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired,
};

export default AuthenticationModal;
