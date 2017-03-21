import React from 'react';
import ReactModal from 'react-modal';
import  { TextFieldGroup } from './';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
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
    const { state } = this;
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <div className="grid grid--bottom">
          <div className="grid__item one-third">
            <TextFieldGroup
              value={this.state.bookName}
              onChange={this.onChangeSearchForm}
              type="text"
              field="bookName"
              label="Libro"
              placeholder="Nombre del Libro"
            />
          </div>
          <div className="grid__item one-sixth">
            <TextFieldGroup
              value={this.state.chapter}
              onChange={this.onChangeSearchForm}
              type="number"
              field="chapter"
              label="Capitulo"
              placeholder="# del Capitulo"
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

export default SearchForm;