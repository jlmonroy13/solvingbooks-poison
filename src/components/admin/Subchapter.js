import React, { Component, PropTypes } from 'react';

class Subchapter extends Component {
  constructor() {
    super();
    this.state = {
      subchapterName: '',
      exercises: '',
    };

    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(e) {
    this.setState({[e.target.name]: e.target.value});
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
};

export default Subchapter;
