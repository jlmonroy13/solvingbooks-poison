import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import BOOKS from '../constants/fakeData';
import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';
import * as firebase from 'firebase';

class InitialSearch extends Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
      urlName: '',
      solutionManuals: {},
    };

    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);
  }

  componentDidMount() {
    const solutionManualsRef = firebase.database().ref().child('solutionManuals');
    solutionManualsRef.on('value', snap => {
      this.setState({
        solutionManuals: snap.val()
      });
    });
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
    const { solutionManuals } = this.state;
    console.log(solutionManuals)
    return (
      <form onSubmit={this.onSubmitSearchForm} autoComplete="off">
        <div className="grid grid--center">
          <div className="grid__item five-twelfths">
            <SimpleSelect
              placeholder="Selecciona un libro"
              options={BOOKS.map(book => ({label: book.name, value: book.urlName}))}
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
};

export default InitialSearch;
