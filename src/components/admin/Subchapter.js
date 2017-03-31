import React, { Component, PropTypes } from 'react';

class Subchapter extends Component {
  constructor() {
    super();
    this.state = {
      subchapterName: '',
      exercises: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
    this.onCreateExercises = this.onCreateExercises.bind(this);
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

  onChangeField(e) {
    const { subchapter, onSetSubchapterInfo, chapterNumber } = this.props;
    this.setState({[e.target.name]: e.target.value});
    if (e.target.name === 'exercises') {
      onSetSubchapterInfo({
        exercises: this.onCreateExercises(e.target.value),
        name: this.state.subchapterName,
        number: subchapter.number,
      }, chapterNumber);
    } else if (e.target.name === 'subchapterName') {
      onSetSubchapterInfo({
        exercises: this.onCreateExercises(this.state.exercises),
        name: e.target.value,
        number: subchapter.number,
      }, chapterNumber);
    }
  }

  render() {
    const { subchapterName, exercises } = this.state;
    const { subchapter } = this.props;
    return (
      <div key={subchapter.number} className="push-half--bottom">
        <div>
          <span>{subchapter.number}</span>
          <input
            value={subchapterName}
            onChange={this.onChangeField}
            type="text"
            name="subchapterName"
            className="push-half--right"
            placeholder="Nombre"
          />
          <div className="inline-block">
            <input
              value={exercises}
              onChange={this.onChangeField}
              type="number"
              name="exercises"
              className=""
              placeholder="# Ejercicios"
            />
          </div>
        </div>
      </div>
    );
  }
}

Subchapter.propTypes = {
  subchapter: PropTypes.object,
  onSetSubchapterInfo: PropTypes.func,
  chapterNumber: PropTypes.number,
};

export default Subchapter;
