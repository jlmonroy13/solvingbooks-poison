import React, {Component} from 'react';

class DisplaySection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { imageUrl } = this.props.searcher;
    return (
      <div>
        <div className="exercise__container">
          <div className="exercise__inner-container">
            { !imageUrl ?
              <h1>¡Este ejercicio no esta disponible aún!</h1>
            : 
              imageUrl === 'empty' ?
                <h1>¡Aqui va a salir el resultado de tu busqueda!</h1>
              :
                <img src={imageUrl} className="exercise__image"/>
            }
            
          </div>
        </div>
      </div>
    );
  } 
}

export default DisplaySection;
