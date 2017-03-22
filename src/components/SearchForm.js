import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import BOOKS from '../constants/fakeData';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      chapter: '',
      subchapter: '',
      exercise: '',
      bookName: '',
      chapters: [],
    };

    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);

  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    this.props.onSetModalState(true);
    console.log(this.state);
  }

  onSelectedBook(value) {
    const chapters = BOOKS.filter(book => book.name === value)[0].chapters;
    this.setState({bookName: value, chapters});
  }

  render() {
    const { bookName, chapters } = this.state; 
    return (
      <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <div className="push--bottom">
          <div className="grid grid--bottom">
            <div className="grid__item one-third">
              <span>Nombre del Libro</span>
              <SimpleSelect 
                placeholder="Selecciona un libro"
                options={BOOKS.map(book => ({label: book.name, value: book.name}))}
                onValueChange={ option => this.onSelectedBook(option.value)}
              />
            </div>
            <div className="grid__item one-sixth">
              <button className="button button--wide button--gray button--mb10 bold">Buscar</button>
            </div>
          </div>
        </div>
        { bookName ?
          <div className="grid">
            <div className="grid__item one-third">
              <span>Capitulo</span>
              <SimpleSelect 
                placeholder="Selecciona un libro"
                options={chapters.map(chapter => ({label: chapter.number, value: chapter.number}))}
              />
            </div>
          </div>
          : ''
        }
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
};

export default SearchForm;
