import React, { Component, PropTypes } from 'react';

class Chapter extends Component {
  constructor() {
    super();
    this.state = {
      chapterName: '',
      subchapters: '',
      exercises: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const { chapterName, exercises, subchapters } = this.state;
    const { chapter, hasSubchapters } = this.props;
    return (
      <div key={chapter.number}>
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
          <button type="button">{hasSubchapters ? 'Agregar Subcapítulos' : 'Agregar Ejercicios'}</button>
        </div>
      </div>
    );
  }
}

Chapter.propTypes = {
  chapters: PropTypes.object,
  solutionManual: PropTypes.object,
};

export default Chapter;
