import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';
import { TextFieldGroup } from './';
import Alert from 'react-s-alert';

class AuthenticationModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      authenticationForm: {
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      isSignUp: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onChangeAuthenticationForm = this.onChangeAuthenticationForm.bind(this);
    this.changeLogInSignUp = this.changeLogInSignUp.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.logInWithSocialNetworks = this.logInWithSocialNetworks.bind(this);
  }

  handleCloseModal() {
    this.props.onSetModalState(false);
    this.props.onSetAuthBtnStatus(false);
  }

  onSubmitForm(e) {
    e.preventDefault();
    const {
      authenticationForm: { email, password, passwordConfirmation},
      isSignUp,
    } = this.state;
    const { onCreateUser, onLogIn } = this.props;

    if(isSignUp) {
      if(!email, !password, !passwordConfirmation) {
        Alert.error(`Debes llenar todos los campos.`);
      } else if(password !== passwordConfirmation) {
        Alert.error(`Las contraseñas no coinciden.`);
      } else {
        const credentials = { email, password };
        const profile = { username: '', email };
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

  logInWithSocialNetworks(socialNetwork) {
    const { onLogInWithSocialNetworks } = this.props;
    onLogInWithSocialNetworks(socialNetwork);
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

    return (
      <ReactModal
        isOpen={authentication.isModalOpen}
        contentLabel="onRequestClose Example"
        className="Modal"
        overlayClassName="modal"
      >
        <section className="modal__content">
          <div className="modal__header">
            { authentication.isAuthBtnClicked ?
              <div>
                <h1 className="modal__header-title">{isSignUp ? 'Registrate' : 'Inicia Sesión' }</h1>
                <p className="modal__description">
                  { isSignUp ?
                    'Al registrarte podrás realizar busquedas ilimitadas totalmente gratis.'
                  : 'Al iniciar sesión podrás realizar busquedas ilimitadas totalmente gratis.'}
                </p>
                <span className="modal__btn-close" onClick={this.handleCloseModal}>&#120;</span>
              </div>
            :
              <h1 className="modal__header-title">{`Antes debes ${authenticationTitle}`}</h1>
            }
          </div>
          <div className="modal__body">
            { !isSignUp ?
              <div>
                <button className="button button--auth button--fb" onClick={()=> { this.logInWithSocialNetworks('facebook'); }}>
                  <span className="icon icon--facebook button__icon" />
                  <span className="">Iniciar con Facebook</span>
                </button>
                <button className="button button--auth button--google" onClick={()=> { this.logInWithSocialNetworks('google'); }}>
                  <span className="icon icon--google button__icon" /> 
                  <span>Iniciar con Google</span>
                </button>
                <p className="login__separator">ó</p>
              </div>
            : null}
            <form onSubmit={this.onSubmitForm} autoComplete="off">
              <TextFieldGroup
                value={this.state.authenticationForm.email}
                onChange={this.onChangeAuthenticationForm}
                type="email"
                field="email"
                label="Correo"
                placeholder="Correo"
              />
              <TextFieldGroup
                value={this.state.authenticationForm.password}
                onChange={this.onChangeAuthenticationForm}
                type="password"
                field="password"
                label="Contraseña"
                placeholder="Contraseña"
              />
              { isSignUp ?
                <TextFieldGroup
                  value={this.state.authenticationForm.passwordConfirmation}
                  onChange={this.onChangeAuthenticationForm}
                  type="password"
                  field="passwordConfirmation"
                  label="Confirmar Contraseña"
                 placeholder="Confirmar Contraseña"
                />
              : ''}
              <button className="button button--secondary block-auto">{isSignUp ? 'Registrarse' : 'Ingresar'}</button>
              <p className="modal__body-footer">{isSignUp ? '¿Ya tienes una cuenta? ' : ''}</p>
              <span className="modal__body-footer-link" onClick={this.changeLogInSignUp}>{isSignUp ? '¡Ingresa ya!' : '¡Crea una nueva cuenta!'}</span>
            </form>
          </div>
        </section>
      </ReactModal>
    );
  }
}

AuthenticationModal.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
  onSetAuthBtnStatus: PropTypes.func,
  onLogIn: PropTypes.func.isRequired,
  onLogInWithSocialNetworks: PropTypes.func.isRequired,
  onCreateUser: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired,
};

export default AuthenticationModal;
