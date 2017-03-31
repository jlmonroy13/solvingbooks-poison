import React, { Component, PropTypes } from 'react';
import { SubchaptersFormContainer } from '../../containers';
import ArrayUtils from '../../utils/array';
import Alert from 'react-s-alert';

class Chapter extends Component {
  constructor() {
    super();
    this.state = {
      chapterName: '',
      subchapters: '',
      exercises: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
    this.onAddSubchapters = this.onAddSubchapters.bind(this);
    this.onCreateSubchapters = this.onCreateSubchapters.bind(this);
    this.onCreateExercises = this.onCreateExercises.bind(this);
  }

  onChangeField(e) {
  const { onSetChapterWithExercises, chapter } = this.props;
    this.setState({[e.target.name]: e.target.value});
    if (e.target.name !== 'subchapters') {
      if (e.target.name === 'exercises') {
        onSetChapterWithExercises({
          exercises: this.onCreateExercises(e.target.value),
          name: this.state.chapterName,
          number: chapter.number,
          subchapters: null,
        });
      } else if (e.target.name === 'chapterName') {
        onSetChapterWithExercises({
          exercises: this.onCreateExercises(this.state.exercises),
          name: e.target.value,
          number: chapter.number,
          subchapters: null,
        });
      }
    }
  }

  onCreateExercises(exercises) {
    const exercisesArray = [];
    const exerciseInfo = {
      number: '',
    };
    for (let i = 1; i < parseInt(exercises) + 1; i++) {
      exercisesArray.push({...exerciseInfo, number: i});
    }
    return exercisesArray;
  }

  onCreateSubchapters() {
    const { subchapters } = this.state;
    const subchaptersArray = [];
    const subchaptersInfo = {
      number: '',
      name: '',
      exercises: '',
    };
    for (let i = 1; i < parseInt(subchapters) + 1; i++) {
      subchaptersArray.push({...subchaptersInfo, number: i});
    }
    return ArrayUtils.toObjectByNumber(subchaptersArray);
  }

  onAddSubchapters() {
    const { chapterName, subchapters } = this.state;
    const { chapter, onSetSubchapters } = this.props;

    if (!chapterName || !subchapters) {
      Alert.error(`Debes escribir el nombre del capitulo y el número de Subcapítulos.`);
    } else {
      onSetSubchapters({
        subchapters: this.onCreateSubchapters(),
        name: chapterName,
        number: chapter.number,
        exercises: null,
      });
      Alert.success(`El nombre del capítulo y sus subcapítulos han sido creados.`);
    }
  }

  render() {
    const { chapterName, exercises, subchapters } = this.state;
    const { chapter, hasSubchapters } = this.props;

    return (
      <div key={chapter.number} className="push-half--bottom">
        <div>
          <span>{chapter.number}</span>
          <input
            value={chapterName}
            onChange={this.onChangeField}
            type="text"
            name="chapterName"
            className="push-half--right"
            placeholder="Nombre"
            className="form__input form__input--medium"
          />
          <div className="inline-block">
            <input
              value={hasSubchapters ? subchapters : exercises}
              onChange={this.onChangeField}
              type="number"
              name={hasSubchapters ? 'subchapters' : 'exercises'}
              className={hasSubchapters ? 'form__input form__input--medium' : 'form__input form__input--large'}
              placeholder={hasSubchapters ? 'Subcapitulos' : 'Ejercicios'}
            />
            {hasSubchapters ?
              <button
                type="button"
                onClick={this.onAddSubchapters}
                className="button button--wide button--basic bold inline-block"
              >Agregar Subcapítulos</button>
            : ''}
          </div>
        </div>
        {hasSubchapters && chapter.subchapters && chapter.subchapters[1] ?
          <div className="push--left push--bottom">
            <h4>Subcapítulos</h4>
            <SubchaptersFormContainer chapterNumber={chapter.number} />
          </div>
        : ''}
      </div>
    );
  }
}

Chapter.propTypes = {
  chapter: PropTypes.object,
  solutionManual: PropTypes.object,
  onSetSubchapters: PropTypes.func,
  onSetChapterWithExercises: PropTypes.func,
  hasSubchapters: PropTypes.bool,
};

export default Chapter;
