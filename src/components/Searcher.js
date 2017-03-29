import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import { browserHistory, Link } from 'react-router';
import Alert from 'react-s-alert';

class Searcher extends Component {
  constructor() {
    super();

    this.state = {
      bookName: '',
      chapter: '',
      subchapter: '',
      exercise: '',
      exercises: [],
      chapters: [],
      subchapters: []
    };

    this.onChangeBook = this.onChangeBook.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);
    this.onSelectedChapter = this.onSelectedChapter.bind(this);
    this.onSelectedSubchapter = this.onSelectedSubchapter.bind(this);
    this.onSelectedExercise = this.onSelectedExercise.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
  }

  componentDidMount() {
    const bookNameRoute = this.props.bookNameUrl;
    let existingBook = false;
    let bookName = '';
    const { solutionManuals } = this.props;

    solutionManuals.forEach((book) => {
      if(book.urlName === bookNameRoute) {
        existingBook = true;
        bookName = book.name;
      }
    });
    if (!existingBook) browserHistory.push('/');
    this.onChangeBook(bookName);
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    const { bookName, chapter, subchapter, exercise, exercises, subchapters } = this.state;
    if (!bookName || !chapter || (!subchapter && subchapters && subchapters.length < 0) || !exercise) {
      Alert.error(`Debes seleccionar todos los campos.`);
    } else {
      const imageUrl = exercises[parseInt(exercise.value) - 1].imageUrl;
      this.props.onSetImageUrl(imageUrl);
    }
  }

  onChangeBook(bookName) {
    const { solutionManuals } = this.props;
    const books = solutionManuals.filter(book => book.name === bookName);
    const chapters = books && books[0] && books[0].chapters;
    this.setState({
      bookName: bookName ? {label: bookName, value: bookName} : '',
      chapters,
      chapter: '',
      subchapter: '',
      exercise: '',
      exercises: [],
    });
  }

  onSelectedBook(option) {
    const bookName = option && option.label;
    const urlName = option && option.value;
    this.onChangeBook(bookName);
    if (bookName) {
      browserHistory.push(`/libro/${urlName}`);
    }
  }

  onSelectedChapter(option) {
    const selectedChapter = option && option.value;
    const stateChapters = this.state.chapters;
    const chapters = stateChapters && stateChapters.filter(chapter => chapter.number === parseInt(selectedChapter));
    const subchapters = chapters && chapters[0] && chapters[0].subchapters;
    let exercises = [];
    if (!subchapters) {
      exercises = chapters && chapters[0] && chapters[0].exercises;
    }
    this.setState({
      chapter: option ? {label: selectedChapter, value: selectedChapter} : '',
      subchapters,
      subchapter: '',
      exercise: '',
      exercises: !subchapters && exercises ? exercises : [],
    });
  }

  onSelectedSubchapter(option) {
    const selectedSubchapter = option && option.value;
    const stateSubchapters = this.state.subchapters;
    const subchapters = stateSubchapters && stateSubchapters.filter(subchapter => subchapter.number === parseInt(selectedSubchapter));
    const exercises = subchapters && subchapters[0] && subchapters[0].exercises;
    this.setState({
      subchapter: option ? {label: selectedSubchapter, value: selectedSubchapter} : '',
      exercises,
      exercise: '',
    });
  }

  onSelectedExercise(option) {
    const exercise = option && option.value;
    this.setState({
      exercise: option ? {label: exercise, value: exercise} : '',
    });
  }

  render() {
    const { bookName, chapter, subchapter, exercise, chapters, subchapters, exercises } = this.state;
    const { solutionManuals } = this.props;
    return (
      <header className="search__header">
          <div className="search__main">
            <Link className="search__title" to="/">El Solucionario.io</Link>
            <form className="inline-block" onSubmit={this.onSubmitSearchForm}>
              <div className="search__form">
                <SimpleSelect
                  placeholder="Selecciona un libro"
                  className="search__main-input"
                  options={solutionManuals && solutionManuals.map(book => ({label: book.name, value: book.urlName}))}
                  onValueChange={this.onSelectedBook}
                  value={bookName}
                />
                <div className="search__subsection">
                  <div className="search__subsection-group">
                    <SimpleSelect
                      placeholder="Capítulo"
                      className="search__subsection-input"
                      options={chapters && chapters.map(chapter => ({label: chapter.number.toString(), value: chapter.number.toString()}))}
                      onValueChange={this.onSelectedChapter}
                      disabled={!bookName}
                      value={chapter}
                    />
                  </div>
                  <div className="search__subsection-group">
                    <SimpleSelect
                      placeholder="Subcapítulo"
                      className="search__subsection-input"
                      options={subchapters && subchapters.map(subchapter => ({label: subchapter.number.toString(), value: subchapter.number.toString()}))}
                      disabled={!chapter || !subchapters}
                      onValueChange={this.onSelectedSubchapter}
                      value={subchapter}
                    />
                  </div>
                  <div className="search__subsection-group">
                    <SimpleSelect
                      placeholder="Ejercicio"
                      className="search__subsection-input"
                      options={exercises && exercises.map(exercise => ({label: exercise.number.toString(), value: exercise.number.toString()}))}
                      disabled={exercises && exercises.length === 0}
                      onValueChange={this.onSelectedExercise}
                      value={exercise}
                    />
                  </div>
                </div>
              </div>
              <div className="search__button">
                <button
                  className="button button--wide button--gray bold"
                >Buscar</button>
              </div>
            </form>
          </div>
      </header>
    );
  }
}

Searcher.propTypes = {
  bookNameUrl: PropTypes.string,
  onSetImageUrl: PropTypes.func,
  solutionManuals: PropTypes.array,
};

export default Searcher;
