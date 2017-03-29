import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';

class InitialSearch extends Component {
  constructor() {
    super();

    this.state = {
      bookName: '',
      urlName: '',
    };

    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    const { bookName, urlName } = this.state;
    if (bookName) {
      browserHistory.push(`/libro/${urlName}`);
    } else {
      Alert.error(`Selecciona un libro.`);
    }
  }

  onSelectedBook(option) {
    const value = option && option.label;
    const urlName = option && option.value;
    this.setState({bookName: value, urlName});
    if (value) {
      browserHistory.push(`/libro/${urlName}`);
    }
  }

  render() {
    const { solutionManuals } = this.props;

    return (
      <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <div className="grid grid--center">
          <div className="grid__item five-twelfths">
            <SimpleSelect
              placeholder="Selecciona un libro"
              options={solutionManuals.map(book => ({label: book.name, value: book.urlName}))}
              onValueChange={this.onSelectedBook}
              className="search__main-input"
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
  solutionManuals: PropTypes.array,
};

export default InitialSearch;
