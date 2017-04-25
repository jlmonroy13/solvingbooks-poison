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
      <section className="display-section">
        <h1 className="sr-only">Sección de visualización</h1>
        <div className="display-section-share">
          <FacebookShareButton
            url={`https://www.elsolucionario.io${pathname}`}
            children={<FacebookIcon size={40} round={true}/>}
            className="display-section-share__item"
            title="El Solucionario - Todas las respuestas en un solo lugar"
            description="Ingresa y encuentra los solucionarios de los libros de Ingeniería, es totalmente gratis."
          />
          <TwitterShareButton
            url={`https://www.elsolucionario.io${pathname}`}
            children={<TwitterIcon size={40} round={true}/>}
            className="display-section-share__item"
            title="El Solucionario - Ingresa y encuentra los solucionarios de los libros de Ingeniería, es totalmente gratis."
          />
          <WhatsappShareButton
            url={`https://www.elsolucionario.io${pathname}`}
            children={<WhatsappIcon size={40} round={true}/>}
            className="display-section-share__item small--only"
            title="El Solucionario - Ingresa y encuentra los solucionarios de los libros de Ingeniería, es totalmente gratis."
            separator=" "
          />
        </div>
        <div className="display-section__inner-container">
          { imageUrl === 'loading' ?
            ''
          :
            imageUrl === 'empty' ?
              <p className="display-section__message">{displayMessage}</p>
            :
              !imageUrl ?
              <p className="display-section__message">
                Este ejercicio no esta disponible.<br/>
                Si lo necesitas con urgencia, escribenos y lo subiremos inmediatamente.
              </p>
              :
                <div className="display-section__image-container">
                  <img src={imageUrl} className="display-section__image"/>
                </div>  
          }
        </div>
      </section>
    );
  }
}

DisplaySection.propTypes = {
  searcher: PropTypes.object,
  pathname: PropTypes.string,
};

export default DisplaySection;
