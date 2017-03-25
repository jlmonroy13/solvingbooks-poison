import React, { Component, PropTypes } from 'react';

class CreateSolutionManual extends Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
      hasSubchapters: false,
      chapters: '',
    };

     this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(value) {
    console.warn(value);
  }

  render() {
    const { bookName, onChangeField, chapters } = this.state;
    return (
      <div className="container">
      <h1>Crear Solucionario</h1>
        <form onSubmit={this.onSubmitSignupForm} autoComplete="off">
          <div>
            <div>
              <div>
                <label htmlFor="bookName">Nombre del Libro</label>
                <input
                  value={bookName}
                  onChange={onChangeField}
                  type="text"
                  name="bookName"
                  id="bookName"
                  className=""
                />
              </div>
              <div>
                <input
                  value={bookName}
                  onChange={onChangeField}
                  type="checkbox"
                  name="hasSubchapters"
                  id="hasSubchapters"
                  className=""
                />
                <label htmlFor="hasSubchapters">Subcapitulos ?</label>
              </div>
            </div>
            <div>
              <label htmlFor="chapters">Número de Capítulos</label>
              <input
                value={chapters}
                onChange={onChangeField}
                type="number"
                name="chapters"
                id="chapters"
                className=""
              />
              <button type="button">Agregar</button>
            </div>
          </div>
          <div>
            <h2>Capítulos</h2>
            <div>
              <span>1</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

CreateSolutionManual.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
};

export default CreateSolutionManual;
