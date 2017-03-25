import React, { Component, PropTypes } from 'react';

class ChaptersForm extends Component {
  constructor() {
    super();
    this.state = {
      chapterName: '',
      exercises: '',
      subchapters: '',
      hasSubchapters: true,
    };

  }

  onChangeField(value) {
    console.warn(value);
  }

  render() {
    const { chapterName, exercises, subchapters, hasSubchapters, onChangeField } = this.state;
    return (
      <div>
        <span>1</span>
        <input
          value={chapterName}
          onChange={onChangeField}
          type="text"
          name="chapterName"
          className=""
        />
        <div>
          <input
            value={hasSubchapters ? subchapters : exercises}
            onChange={onChangeField}
            type="number"
            name={hasSubchapters ? 'subchapters' : 'exercises'}
            className=""
          />
          <button type="button">{hasSubchapters ? 'Agregar Subcapítulos' : 'Agregar Ejercicios'}</button>
        </div>
      </div>
    );
  }
}

export default ChaptersForm;