import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import BOOKS from '../constants/fakeData';
import { browserHistory, Link } from 'react-router';

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      bookName: '',
      chapter: '',
      subchapter: '',
      exercise: '',
      exercises: [],
      chapters: [],
      subchapters: [],
    };

    this.onChangeBook = this.onChangeBook.bind(this);
    this.onSelectedBook = this.onSelectedBook.bind(this);
    this.onSelectedChapter = this.onSelectedChapter.bind(this);
    this.onSelectedSubchapter = this.onSelectedSubchapter.bind(this);
    this.onSelectedExercise = this.onSelectedExercise.bind(this);
  }

  componentDidMount() {
    const bookNameRoute = this.props.params.bookName;
    const bookName = bookNameRoute.replace(/-/g," ");
    this.onChangeBook(bookName);
  }

  onChangeBook(bookName) {
    const books = BOOKS.filter(book => book.name === bookName);
    const chapters = books && books[0] && books[0].chapters;
    this.setState({ bookName, chapters, chapter: '', subchapter: '', exercise: '' });
  }

  onSelectedBook(option) {
    const bookName = option && option.value;
    this.onChangeBook(bookName);
    if (bookName) {
      const route = bookName.replace(/ /g,"-");
      browserHistory.push(`/${route}`);
    }
  }

  onSelectedChapter(option) {
    const selectedChapter = option && option.value;
    const stateChapters = this.state.chapters;
    const chapters = stateChapters && stateChapters.filter(chapter => chapter.number === selectedChapter);
    const subchapters = chapters && chapters[0] && chapters[0].subchapters;
    this.setState({ chapter: selectedChapter, subchapters, subchapter: '', exercise: '' });
  }

  onSelectedSubchapter(option) {
    const selectedSubchapter = option && option.value;
    const stateSubchapters = this.state.subchapters;
    const subchapters = stateSubchapters && stateSubchapters.filter(subchapter => subchapter.number === selectedSubchapter);
    const exercises = subchapters && subchapters[0] && subchapters[0].exercises;
    this.setState({ subchapter: selectedSubchapter, exercises, exercise: '' });
  }

  onSelectedExercise(option) {
    const exercise = option && option.value;
    this.setState({ exercise });
  }

  render() {
    const { bookName, chapter, subchapter, exercise, chapters, subchapters, exercises } = this.state;
    return (
      <header className="search__header">
          <div className="search__main">
            <Link className="search__title" to="/">El Solucionario.io</Link>
            <div className="search__form">
              <form>
                <SimpleSelect
                  placeholder="Selecciona un libro"
                  className="search__main-input"
                  options={BOOKS.map(book => ({label: book.name, value: book.name}))}
                  onValueChange={this.onSelectedBook}
                  value={{label: bookName, value: bookName}}
                />
                <div className="search__subsection">
                  <div className="search__subsection-group">
                    <SimpleSelect
                      placeholder="Capitulo"
                      className="search__subsection-input"
                      options={chapters && chapters.map(chapter => ({label: chapter.number, value: chapter.number}))}
                      onValueChange={this.onSelectedChapter}
                      disabled={!bookName}
                      value={{label: chapter, value: chapter}}
                    />
                  </div>
                  <div className="search__subsection-group">
                    <SimpleSelect
                      placeholder="Subcapitulo"
                      className="search__subsection-input"
                      options={subchapters && subchapters.map(subchapter => ({label: subchapter.number, value: subchapter.number}))}
                      disabled={!chapter}
                      onValueChange={this.onSelectedSubchapter}
                      value={{label: subchapter, value: subchapter}}
                    />
                  </div>
                  <div className="search__subsection-group">
                    <SimpleSelect
                      placeholder="Ejercicio"
                      className="search__subsection-input"
                      options={exercises && exercises.map(exercise => ({label: exercise, value: exercise}))}
                      disabled={!subchapter}
                      onValueChange={this.onSelectedExercise}
                      value={{label: exercise, value: exercise}}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
      </header>
    );
  }
}

SearchPage.propTypes = {
  params: PropTypes.object,
};

export default SearchPage;
