import React, {Component, PropTypes} from 'react';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

class DisplaySection extends Component {
  constructor(props) {
    super(props);

    this.createProcessMessages = this.createProcessMessages.bind(this);
  }

  createProcessMessages() {
    let message = '¡Presiona el botón Buscar!';
    const { bookName, chapter, subchapter, exercise } = this.props.searcher;
    const { solutionManual } = this.props.searcher;
    const hasSubchapters = solutionManual && solutionManual.hasSubchapters;

    if (bookName === '') {
      message = '¡Selecciona un Libro!';
    }
    if (bookName !== '' && chapter === '') {
      message = '¡Selecciona un Capítulo!';
    }
    if (bookName !== '' && chapter !== '' && subchapter === '' && hasSubchapters) {
      message = '¡Selecciona un Subcapítulo!';
    }
    if (bookName !== '' && chapter !== '' && (subchapter !== '' || !hasSubchapters) && exercise === '') {
      message = '¡Selecciona un Ejercicio!';
    }
    return message;
  }
  render() {
    const { searcher: { imageUrl }, pathname } = this.props;
    const displayMessage = this.createProcessMessages();
    const {
      FacebookShareButton,
      TwitterShareButton,
      WhatsappShareButton,
    } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const WhatsappIcon = generateShareIcon('whatsapp');
    const TwitterIcon = generateShareIcon('twitter');

    return (
      <div>
        <div className="display-section-sn">
          <FacebookShareButton
            url={`https://www.elsolucionario.io${pathname}`}
            children={<FacebookIcon size={40} round={true}/>}
            className="display-section-sn__element"
            title="ElSolucionario.io - Todas las respuestas en un solo lugar"
            description="Ingresa y encuentra los solucionarios de los libros de Ingeniería, es totalmente gratis."
          />
          <TwitterShareButton
            url={`https://www.elsolucionario.io${pathname}`}
            children={<TwitterIcon size={40} round={true}/>}
            className="display-section-sn__element"
            title="ElSolucionario.io - Ingresa y encuentra los solucionarios de los libros de Ingeniería, es totalmente gratis."
          />
          <WhatsappShareButton
            url={`https://www.elsolucionario.io${pathname}`}
            children={<WhatsappIcon size={40} round={true}/>}
            className="display-section-sn__element display-section-sn__element--wp"
            title="ElSolucionario.io - Ingresa y encuentra los solucionarios de los libros de Ingeniería, es totalmente gratis."
            separator=" "
          />
        </div>
        <div className="display-section">
          <div className="exercise__container">
            <div className="exercise__inner-container">
              { imageUrl === 'loading' ?
                ''
              :
                imageUrl === 'empty' ?
                  <h1 className="exercise__message">{displayMessage}</h1>
                :
                  !imageUrl ?
                    <span className="search__display">
                      <h1 className="exercise__message">Este ejercicio no esta disponible.</h1>
                      <h1 className="search__display-title exercise__message">Si lo necesitas con urgencia, escribenos y lo subiremos inmediatamente.</h1>
                    </span>
                  :
                    <img src={imageUrl} className="exercise__image"/>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DisplaySection.propTypes = {
  searcher: PropTypes.object,
  pathname: PropTypes.string,
};

export default DisplaySection;
