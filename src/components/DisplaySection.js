import React, {Component, PropTypes} from 'react';

class DisplaySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { imageUrl } = this.props.searcher;
    return (
      <div>
        <div className="exercise__container">
          <div className="exercise__inner-container">
            { imageUrl === 'loading' ?
              ''
            :
              imageUrl === 'empty' ?
                <h1 className="exercise__message">¡Aqui va a salir el resultado de tu busqueda!</h1>
              :
                !imageUrl ?
                  <span className="search__display">
                    <h1 className="exercise__message">Este ejercicio no esta disponible.</h1>
                    <h1 className="search__display-title exercise__message">Si lo necesitas con urgencia, escribenos y lo subiremos inmediatamente.</h1>
                    <img src={require('../assets/images/arrow.svg')} className="search__display-icon" />
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
