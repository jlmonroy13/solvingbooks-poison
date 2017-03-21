import React, { Component, PropTypes } from 'react';
import { TextFieldGroup } from './';
import { SimpleSelect } from 'react-selectize';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      bookNames: ['libro 1', 'libro 2', 'libro 3'],
      chapter: '',
      subchapter: '',
      exercise: '',
    };

    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.onChangeSearchForm = this.onChangeSearchForm.bind(this);
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    this.props.onSetModalState(true);
    console.log(this.state.searchForm);
  }

  onChangeSearchForm(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <div className="grid grid--bottom">
          <div className="grid__item one-third">
            <SimpleSelect placeholder="Select a fruit" onValueChange={value => alert(value)}>
              {this.state.bookNames.map((bookName, index) => <option key={index} value={bookName}>{bookName}</option>)}
            </SimpleSelect>
          </div>
          <div className="grid__item one-sixth">
            <TextFieldGroup
              value={this.state.chapter}
              onChange={this.onChangeSearchForm}
              type="number"
              field="chapter"
              label="Capitulo"
              placeholder="# del Capitulo"
              disabled={false}
            />
          </div>
          <div className="grid__item one-sixth">
            <TextFieldGroup
              value={this.state.subchapter}
              onChange={this.onChangeSearchForm}
              type="number"
              field="subchapter"
              label="Subcapitulo"
              placeholder="# del Subcapitulo"
              disabled={false}
            />
          </div>
          <div className="grid__item one-sixth">
            <TextFieldGroup
              value={this.state.exercise}
              onChange={this.onChangeSearchForm}
              type="number"
              field="exercise"
              label="Ejercicio"
              placeholder="# del Ejercicio"
              disabled={false}
            />
          </div>
          <div className="grid__item one-sixth">
            <button className="button button--wide button--gray button--mb10 bold">Buscar</button>
          </div>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
};

export default SearchForm;
