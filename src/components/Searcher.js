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
    this.setImage = this.setImage.bind(this);
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

  setImage() {
    const { exercise, exercises } = this.state;
    this.props.onSetStatusRequestFalse();
    const imageUrl = exercises[parseInt(exercise.value) - 1].imageUrl;
    this.props.onSetImageUrl(imageUrl);
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    const { bookName, chapter, subchapter, exercise, subchapters } = this.state;
    if (!bookName || !chapter || (!subchapter && subchapters && subchapters.length < 0) || !exercise) {
      Alert.error(`Debes seleccionar todos los campos.`);
    }
  }

  onChangeBook(bookName) {
    const { solutionManuals, onSetSolutionManual, onSetSelections } = this.props;
    const book = solutionManuals.filter(bookItem => bookItem.name === bookName);
    const chapters = book && book[0] && book[0].chapters;
    onSetSolutionManual(book[0]);
    onSetSelections({
      bookName: bookName || '',
      chapter: '',
      subchapter: '',
      exercise: '',
    });
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
    const { onSetSelections } = this.props;
    const selectedChapter = option && option.value;
    const stateChapters = this.state.chapters;
    const chapters = stateChapters && stateChapters.filter(chapter => chapter.number === parseInt(selectedChapter));
    const subchapters = chapters && chapters[0] && chapters[0].subchapters;
    let exercises = [];
    if (!subchapters) {
      exercises = chapters && chapters[0] && chapters[0].exercises;
    }
    onSetSelections({
      chapter: option ? selectedChapter : '',
      subchapter: '',
      exercise: '',
    });
    this.setState({
      chapter: option ? {label: selectedChapter, value: selectedChapter} : '',
      subchapters,
      subchapter: '',
      exercise: '',
      exercises: !subchapters && exercises ? exercises : [],
    });
  }

  onSelectedSubchapter(option) {
    const { onSetSelections } = this.props;
    const selectedSubchapter = option && option.value;
    const stateSubchapters = this.state.subchapters;
    const subchapters = stateSubchapters && stateSubchapters.filter(subchapter => subchapter.number === parseInt(selectedSubchapter));
    const exercises = subchapters && subchapters[0] && subchapters[0].exercises;
    onSetSelections({
      subchapter: option ? selectedSubchapter : '',
      exercise: '',
    });
    this.setState({
      subchapter: option ? {label: selectedSubchapter, value: selectedSubchapter} : '',
      exercises,
      exercise: '',
    });
  }

  onSelectedExercise(option) {
    const { onSetSelections } = this.props;
    const exercise = option && option.value;
    onSetSelections({ exercise: option ? exercise : '' });
    this.setState({
      exercise: option ? {label: exercise, value: exercise} : '',
    });
    this.props.onSetImageUrl('loading');
    this.props.onSetStatusRequestTrue();
    setTimeout(this.setImage, 100);
  }

  render() {
    const { bookName, chapter, subchapter, exercise, chapters, subchapters, exercises } = this.state;
    const { solutionManuals } = this.props;
    return (
      <header className="search__header">
          <div className="search__main">
            <div className="search__title">
              <Link to="/">ElSolucionario.io</Link>
            </div>
            <form className="search__form" onSubmit={this.onSubmitSearchForm}>
              <div>
                <SimpleSelect
                  placeholder="Selecciona un libro"
                  className="search__main-input"
                  options={solutionManuals && solutionManuals.map(book => ({label: book.name, value: book.urlName}))}
                  onValueChange={this.onSelectedBook}
                  value={bookName}
                />
                <div className="grid">
                  <div className="grid__item medium--two-fifths">
                    <SimpleSelect
                      placeholder="Capítulo"
                      className="search__subsection-input"
                      options={chapters && chapters.map(chapter => ({label: (`${chapter.number.toString()} - ${chapter.name}`), value: (`${chapter.number.toString()} - ${chapter.name}`)}))}
                      onValueChange={this.onSelectedChapter}
                      disabled={!bookName}
                      value={chapter}
                    />
                  </div>
                  <div className="grid__item medium--two-fifths">
                    <SimpleSelect
                      placeholder="Subcapítulo"
                      className="search__subsection-input"
                      options={subchapters && subchapters.map(subchapter => ({label: (`${subchapter.number.toString()} - ${subchapter.name}`), value: (`${subchapter.number.toString()} - ${subchapter.name}`)}))}
                      disabled={!chapter || !subchapters}
                      onValueChange={this.onSelectedSubchapter}
                      value={subchapter}
                    />
                  </div>
                  <div className="grid__item medium--one-fifth">
                    <SimpleSelect
                      placeholder="Ejercicio"
                      className="search__subsection-input search__subsection-input--small"
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
  onSetStatusRequestFalse: PropTypes.func,
  onSetStatusRequestTrue: PropTypes.func,
  onSetSolutionManual: PropTypes.func,
  onSetSelections: PropTypes.func,
  solutionManuals: PropTypes.array,
};

export default Searcher;
