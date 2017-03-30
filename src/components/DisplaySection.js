import React, {Component} from 'react';

class DisplaySection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isImageReady } = this.props.searcher;
    return (
      <div>
        <div className="exercise__container">
          <div className="exercise__inner-container">
            { isImageReady ?
              <img src="../assets/images/1-2-15.jpg" className="exercise__image"/>
            :
              <h1>¡Aqui va a salir el resultado de tu busqueda!</h1>
            }

          </div>
        </div>
      </div>
    );
  }

}

export default DisplaySection;
