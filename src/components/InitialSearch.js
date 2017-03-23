import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import BOOKS from '../constants/fakeData';
import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';

class InitialSearch extends Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
    };

    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    const { bookName } = this.state;
    const route = bookName.replace(/ /g,"-");
    if (bookName) {
      browserHistory.push(`/${route}`);
    } else {
      Alert.error(`Selecciona un libro.`);
    }
  }

  onSelectedBook(value) {
    this.setState({bookName: value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <div className="grid grid--center">
          <div className="grid__item five-twelfths">
            <SimpleSelect
              placeholder="Selecciona un libro"
              options={BOOKS.map(book => ({label: book.name, value: book.name}))}
              onValueChange={option => this.onSelectedBook(option && option.value)}
              className="full-width"
            />
            <div className="push--top grid--center">
              <button className="button button--wide button--gray bold">Buscar</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

InitialSearch.propTypes = {
  onSetModalState: PropTypes.func.isRequired,
};

export default InitialSearch;
