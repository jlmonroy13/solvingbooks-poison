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
    const { solutionManualsObj, onSetSolutionManual } = this.props;
    const bookName = option && option.label;
    const id = option && option.value;
    const { urlName } = solutionManualsObj[id];
    this.setState({bookName, urlName});
    if (bookName) {
      onSetSolutionManual(solutionManualsObj[id]);
      browserHistory.push(`/libro/${urlName}`);
    }
  }

  render() {
    const { solutionManuals } = this.props;

    return (
      <div className="landing-page__form">
        <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
          <SimpleSelect
            placeholder="Selecciona un libro"
            options={solutionManuals.map(book => ({label: book.name, value: book.id}))}
            onValueChange={this.onSelectedBook}
          />
          <div className="text--center">
            <button className="button button--primary landing-page__button">Buscar</button>
          </div>
        </form>
      </div>
    );
  }
}

InitialSearch.propTypes = {
  onSetSolutionManual: PropTypes.func.isRequired,
  solutionManuals: PropTypes.array,
  solutionManualsObj: PropTypes.object,
};

export default InitialSearch;
