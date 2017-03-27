import React, { Component, PropTypes } from 'react';
import { ChaptersForm } from '../../components';

class CreateSolutionManual extends Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
      urlName: '',
      hasSubchapters: false,
      chapters: '',
    };

     this.onChangeField = this.onChangeField.bind(this);
     this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
     this.onAddChapters = this.onAddChapters.bind(this);
  }

  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onChangeCheckbox(e) {
    this.setState({[e.target.name]: e.target.checked});
  }

  onAddChapters() {
    const { bookName, urlName, hasSubchapters } = this.state;
    const { onSetBasicInfo } = this.props;
    const data = {
      name: bookName,
      urlName,
      hasSubchapters, 
    };
    onSetBasicInfo(data);
  }

  render() {
    const { bookName, urlName, chapters, hasSubchapters } = this.state;
    return (
      <div className="container">
      <h1>Crear Solucionario</h1>
        <form autoComplete="off">
          <div>
            <div>
              <div>
                <label htmlFor="bookName">Nombre del Libro</label>
                <input
                  value={bookName}
                  onChange={this.onChangeField}
                  type="text"
                  name="bookName"
                  id="bookName"
                  className=""
                />
              </div>
              <div>
                <label htmlFor="urlName">Nombre en URL</label>
                <input
                  value={urlName}
                  onChange={this.onChangeField}
                  type="text"
                  name="urlName"
                  id="urlName"
                  className=""
                />
              </div>
              <div className="inline-block push--right">
                <input
                  value={hasSubchapters}
                  onChange={this.onChangeCheckbox}
                  type="checkbox"
                  name="hasSubchapters"
                  id="hasSubchapters"
                  className=""
                />
                <label htmlFor="hasSubchapters">Subcapitulos ?</label>
              </div>
              <div className="inline-block">
                <label htmlFor="chapters">Número de Capítulos</label>
                <input
                  value={chapters}
                  onChange={this.onChangeField}
                  type="number"
                  name="chapters"
                  id="chapters"
                  className=""
                />
                <button type="button" onClick={this.onAddChapters}>Agregar</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Capítulos</h2>
            <div>
              <ChaptersForm />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

CreateSolutionManual.propTypes = {
  onSetBasicInfo: PropTypes.func,
};


export default CreateSolutionManual;
