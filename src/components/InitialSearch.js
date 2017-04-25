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
    const { onSetStatusRequestTrue } = this.props;
    const bookName = option && option.label;
    const urlName = option && option.value;
    this.setState({bookName, urlName});
    if (bookName) {
      onSetStatusRequestTrue();
      browserHistory.push(`/libro/${urlName}`);
    }
  }

  render() {
    const { solutionManuals } = this.props;

    return (
      <div className="landing-page__form">
        <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <nav>
          <h1 className="sr-only">Navegación principal</h1>
          <SimpleSelect
            placeholder="Selecciona un libro"
            options={solutionManuals.map(book => ({label: book.name, value: book.urlName}))}
            onValueChange={this.onSelectedBook}
          />
        </nav>
          <div className="text--center">
            <button className="button button--primary landing-page__button">Buscar</button>
          </div>
        </form>
      </div>
    );
  }
}

InitialSearch.propTypes = {
  onSetStatusRequestTrue: PropTypes.func,
  solutionManuals: PropTypes.array,
};

export default InitialSearch;
