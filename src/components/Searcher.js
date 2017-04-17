import React, { Component, PropTypes } from 'react';
import { SimpleSelect } from 'react-selectize';
import { browserHistory, Link } from 'react-router';
import Alert from 'react-s-alert';

class Searcher extends Component {
  constructor() {
    super();

    this.state = {
      chapter: '',
      subchapter: '',
      exercise: '',
      exercises: [],
      subchapters: [],
    };

    this.onSelectedBook = this.onSelectedBook.bind(this);
    this.onSelectedChapter = this.onSelectedChapter.bind(this);
    this.onSelectedSubchapter = this.onSelectedSubchapter.bind(this);
    this.onSelectedExercise = this.onSelectedExercise.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  setImage() {
    const { exercise, exercises } = this.state;
    const { onSetModalState, onSetStatusRequestFalse } = this.props;
    onSetStatusRequestFalse();
    const imageUrl = exercises[parseInt(exercise.value) - 1].imageUrl;
    this.props.onSetImageUrl(imageUrl);
    onSetModalState(true);
  }

  onSubmitSearchForm(e) {
    e.preventDefault();
    const { bookName, chapter, subchapter, exercise, subchapters } = this.state;
    if (!bookName || !chapter || (!subchapter && subchapters && subchapters.length < 0) || !exercise) {
      Alert.error(`Debes seleccionar todos los campos.`);
    }
  }

  onSelectedBook(option) {
    if(!option) {
      this.props.onSetSolutionManual({});
      this.setState({ chapter: '', subchapter: '', exercise: '', exercises: [] });
    } else {
      const bookName = option && option.label;
      const urlName = option && option.value;

      if (bookName) {
        browserHistory.push(`/libro/${urlName}`);
      }
    }
  }

  onSelectedChapter(option) {
    const { onSetSelections, solutionManual } = this.props;
    const selectedChapter = option && option.value;
    const { chapters: stateChapters } =  solutionManual;
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
    const { onSetSelections, onSetImageUrl, onSetStatusRequestTrue } = this.props;
    const exercise = option && option.value;
    onSetSelections({ exercise: option ? exercise : '' });
    this.setState({
      exercise: option ? {label: exercise, value: exercise} : '',
    });
    onSetImageUrl('loading');
    onSetStatusRequestTrue();
    setTimeout(this.setImage, 100);
  }

  render() {
    const { chapter, subchapter, exercise, subchapters, exercises } = this.state;
    const { solutionManuals, solutionManual } = this.props;
    const { name, chapters } =  solutionManual;
    const bookName = name ? {label: name, value: name} : '';

    return (
      <header className="header">
        <Link to="/" className="header__logo">
          <img src={require('../assets/images/logo-header.svg')} alt="El Solucionario"/>
        </Link>
        <form className="search__form" onSubmit={this.onSubmitSearchForm}>
          <div>
            <div className="push-half--bottom">
              <SimpleSelect
                placeholder="Selecciona un libro"
                options={solutionManuals && solutionManuals.map(book => ({label: book.name, value: book.urlName}))}
                onValueChange={this.onSelectedBook}
                value={bookName}
              />
            </div>
            <div className="push-half--bottom">
              <div className="grid">
                <div className="grid__item medium--two-fifths">
                  <SimpleSelect
                    placeholder="Capítulo"
                    className="header__input"
                    options={chapters && chapters.map(chapter => ({label: (`${chapter.number.toString()} - ${chapter.name}`), value: (`${chapter.number.toString()} - ${chapter.name}`)}))}
                    onValueChange={this.onSelectedChapter}
                    disabled={!bookName}
                    value={chapter}
                  />
                </div>
                <div className="grid__item medium--two-fifths">
                  <SimpleSelect
                    placeholder="Subcapítulo"
                    className="header__input"
                    options={subchapters && subchapters.map(subchapter => ({label: (`${subchapter.number.toString()} - ${subchapter.name}`), value: (`${subchapter.number.toString()} - ${subchapter.name}`)}))}
                    disabled={!chapter || !subchapters}
                    onValueChange={this.onSelectedSubchapter}
                    value={subchapter}
                  />
                </div>
                <div className="grid__item medium--one-fifth">
                  <SimpleSelect
                    placeholder="Ejercicio"
                    options={exercises && exercises.map(exercise => ({label: exercise.number.toString(), value: exercise.number.toString()}))}
                    disabled={exercises && exercises.length === 0}
                    onValueChange={this.onSelectedExercise}
                    value={exercise}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button button--primary header__button">Buscar</button>
        </form>
      </header>
    );
  }
}

Searcher.propTypes = {
  bookNameUrl: PropTypes.string,
  onSetImageUrl: PropTypes.func,
  onSetStatusRequestFalse: PropTypes.func,
  onSetStatusRequestTrue: PropTypes.func,
  onGetSolutionManual: PropTypes.func,
  onSetSolutionManual: PropTypes.func,
  onSetSelections: PropTypes.func,
  onSetModalState: PropTypes.func,
  solutionManuals: PropTypes.array,
  solutionManualsObj: PropTypes.object,
  solutionManual: PropTypes.object,
};

export default Searcher;
