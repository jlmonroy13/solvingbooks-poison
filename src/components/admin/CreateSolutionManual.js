import React, { Component, PropTypes } from 'react';
import { ChaptersFormContainer } from '../../containers';
import ArrayUtils from '../../utils/array';
import Alert from 'react-s-alert';

class CreateSolutionManual extends Component {
  constructor() {
    super();
    this.state = {
      chapters: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onAddChapters = this.onAddChapters.bind(this);
    this.onCreateChapters = this.onCreateChapters.bind(this);
  }

  onChangeField(e) {
    const { solutionManual } = this.props;
    const { name, urlName, hasSubchapters } = solutionManual;
    let data = {};

    if (e.target.name !== 'chapters') {
      if (e.target.name === 'name') {
        data = {
          name: e.target.value,
          urlName,
          hasSubchapters,
        };
      } else if (e.target.name === 'urlName') {
        data = {
          name,
          urlName: e.target.value,
          hasSubchapters,
        };
      } else {

      }

      data[e.target.name] = e.target.value;
      this.props.onSetBasicInfo(data);
    }
  }

  onChangeCheckbox(e) {
    this.props.onSetHasSubchapters(e.target.checked);
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
    const { onSetBasicInfo, onSetChapters, solutionManual } = this.props;
    const { chapters } = this.state;
    const { name, urlName, hasSubchapters } = solutionManual;

    const data = {
      name,
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
    const { name, hasSubchapters, urlName } = this.props.solutionManual;
    const { chapters: storeChapters } = this.props;
    return (
      <div className="container">
      <h1>Crear Solucionario</h1>
        <form autoComplete="off">
          <div>
            <div>
              <label htmlFor="bookName">Nombre del Libro</label>
              <input
                value={name}
                onChange={this.onChangeField}
                type="text"
                name="name"
                id="name"
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
              <label htmlFor="hasSubchapters">¿Subcapítulos?</label>
              <input
                value={hasSubchapters}
                onChange={this.onChangeCheckbox}
                type="checkbox"
                name="hasSubchapters"
                id="hasSubchapters"
                className=""
              />
            </div>
            <div className="inline-block">
              <label htmlFor="chapters">Capítulos</label>
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
          {storeChapters[1] ?
            <div>
              <h3>Capítulos</h3>
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
  onSetHasSubchapters: PropTypes.func,
  chapters: PropTypes.object,
  solutionManual: PropTypes.object,
};


export default CreateSolutionManual;
