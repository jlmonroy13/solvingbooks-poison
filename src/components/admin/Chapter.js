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
  }

  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onCreateSubchapters() {
    const { subchapters } = this.state;
    const subchaptersArray = [];
    const subchaptersInfo = {
      number: '',
      name: '',
      exercises: '',
    }
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
      onSetSubchapters(chapter.number, this.onCreateSubchapters());
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
          />
          <div className="inline-block">
            <input
              value={hasSubchapters ? subchapters : exercises}
              onChange={this.onChangeField}
              type="number"
              name={hasSubchapters ? 'subchapters' : 'exercises'}
              className=""
              placeholder={hasSubchapters ? '# Subcapitulos' : '# Ejercicios'}
            />
            {hasSubchapters ?
              <button type="button" onClick={this.onAddSubchapters}>Agregar Subcapítulos</button>
            : ''}
          </div>
        </div>
        {hasSubchapters && chapter.subchapters[1] ?
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
  chapters: PropTypes.object,
  solutionManual: PropTypes.object,
};

export default Chapter;
