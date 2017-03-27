import React, { Component, PropTypes } from 'react';
import { ChaptersFormContainer } from '../../containers';
import ArrayUtils from '../../utils/array';
import Alert from 'react-s-alert';

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
    this.onCreateChapters = this.onCreateChapters.bind(this);
  }

  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onChangeCheckbox(e) {
    this.setState({[e.target.name]: e.target.checked});
  }

  onCreateChapters() {
    const { chapters } = this.state;
    const chaptersArray = [];
    const chapterInfo = {
      number: '',
      name: '',
      exercises: '',
      subchapters: '',
    }
    for (let i = 1; i < parseInt(chapters) + 1; i++) {
      chaptersArray.push({...chapterInfo, number: i});
    }
    return ArrayUtils.toObjectByNumber(chaptersArray);
  }

  onAddChapters() {
    const { bookName, urlName, hasSubchapters, chapters } = this.state;
    const { onSetBasicInfo, onSetChapters } = this.props;

    const data = {
      name: bookName,
      urlName,
      hasSubchapters,
    };
    if (!bookName || !urlName || !chapters) {
      Alert.error(`Debes llenar los campos de la Información básica.`);
    } else {
      onSetChapters(this.onCreateChapters());
      onSetBasicInfo(data);
      Alert.success(`La información básica y los capitulos han sido creados.`);
    }
  }

  render() {
    const { bookName, urlName, chapters, hasSubchapters } = this.state;
    const { chapters: storeChapters } = this.props;
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
          {storeChapters[1] ?
            <div>
              <h2>Capítulos</h2>
              <div>
                <ChaptersFormContainer />
              </div>
            </div>
          :''}
        </form>
      </div>
    );
  }
}

CreateSolutionManual.propTypes = {
  onSetBasicInfo: PropTypes.func,
  onSetChapters: PropTypes.func,
  chapters: PropTypes.object,
};


export default CreateSolutionManual;
