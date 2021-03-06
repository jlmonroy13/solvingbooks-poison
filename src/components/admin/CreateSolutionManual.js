import React, { Component, PropTypes } from 'react';
import ChaptersFormContainer from '../../containers/admin/ChaptersForm';
import ArrayUtils from '../../utils/array';
import ObjectUtils from '../../utils/object';
import Alert from 'react-s-alert';
import database from '../../utils/database';

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
    this.onCreateJSON = this.onCreateJSON.bind(this);
  }

  onCreateJSON() {
    const { chapters, solutionManual } = this.props;
    let data = {};
    if (solutionManual.hasSubchapters) {
      const newChapters = ObjectUtils.toArray(chapters).map((chapter => (
        {
          ...chapter,
          subchapters: [...ObjectUtils.toArray(chapter.subchapters)],
        }
      )));
      data = {
        ...solutionManual,
        chapters: newChapters,
      };
    } else {
      data = {
        ...solutionManual,
        chapters: [...ObjectUtils.toArray(chapters)],
      };
    }
    database.push(data).then(response => {
      const solutionManualId = response.path.o[1];
      database.child(solutionManualId).update({id: solutionManualId});
      Alert.success(`Solucionario creado exitosamente.`);
    });
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
      }

      data[e.target.name] = e.target.value;
      this.props.onSetBasicInfo(data);
    } else {
      this.setState({
        chapters: e.target.value,
      });
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
    };

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
    if (!name || !urlName || !chapters) {
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
    const { chapters } = this.state;

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
                className="form__input push-half--bottom"
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
                className="form__input push-half--bottom"
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
                className="form__input form__input--small"
              />
              <button
                type="button"
                onClick={this.onAddChapters}
                className="button button--wide button--basic bold"
              >Agregar Capítulos</button>
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
        { (storeChapters[1] && storeChapters[1].exercises) || (storeChapters[1] && storeChapters[1].subchapters && storeChapters[1].subchapters[1]) ?
          <button
            onClick={this.onCreateJSON}
            className="button button--wide button--gray bold push--bottom"
          >Crear Solucionario</button>
        :''}
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
