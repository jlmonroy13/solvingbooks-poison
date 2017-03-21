import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import { TextFieldGroup } from './';

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

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onChangeAuthenticationForm = this.onChangeAuthenticationForm.bind(this);
    this.activateSignUp = this.activateSignUp.bind(this);
    this.activateLogIn = this.activateLogIn.bind(this);
    this.onSubmitSignupForm = this.onSubmitSignupForm.bind(this);
    this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this);
  }

  handleOpenModal() {
    this.props.onSetModalState(true);
  }

  handleCloseModal() {
    this.props.onSetModalState(false);
  }

  onSubmitLoginForm(e) {
    e.preventDefault();
    console.log(this.state.authenticationForm);
  }

  onSubmitSignupForm(e) {
    e.preventDefault();
    console.log(this.state.authenticationForm);
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

  activateLogIn() {
    this.setState({ isSignUp: false });
  }

  activateSignUp() {
    this.setState({ isSignUp: true });
  }

  render() {
    const { isSignUp } = this.state;
    const { authentication } = this.props;
    const authenticationTitle = isSignUp ? 'registrarte' : 'iniciar sesión';
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
            {isSignUp ?
              <form onSubmit={this.onSubmitSignupForm} autoComplete="off">
                <TextFieldGroup
                  value={this.state.authenticationForm.userName}
                  onChange={this.onChangeAuthenticationForm}
                  type="text"
                  field="userName"
                  label="Nombre de Usuario"
                />
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
                <TextFieldGroup
                  value={this.state.authenticationForm.passwordConfirmation}
                  onChange={this.onChangeAuthenticationForm}
                  type="password"
                  field="passwordConfirmation"
                  label="Confirmar Contraseña"
                />
                <button className="button button--gray bold button--full-block push--top">Registrarse</button>
                <p className="modal__body-footer">¿Ya tienes una cuenta? <span className="modal__body-footer-link" onClick={this.activateLogIn}>¡Ingresa ya!</span></p>
              </form>
            :
              <form onSubmit={this.onSubmitLogInForm} autoComplete="off">
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
                <button className="button button--gray bold button--full-block push--top">Ingresar</button>
                <p className="modal__body-footer">¿Aún no tienes una cuenta? <span className="modal__body-footer-link" onClick={this.activateSignUp}>¡Registrate!</span></p>
              </form>
            }
          </div>
        </div>
      </ReactModal>
    );
  }
}

AuthenticationModal.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired,
};

export default AuthenticationModal;
