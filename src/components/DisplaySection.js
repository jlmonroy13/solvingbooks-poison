import React, {Component, PropTypes} from 'react';

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
    const { searcher: { imageUrl } } = this.props;
    const displayMessage = this.createProcessMessages();

    return (
      <div>
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
    );
  }
}

DisplaySection.propTypes = {
  searcher: PropTypes.object,
};

export default DisplaySection;
