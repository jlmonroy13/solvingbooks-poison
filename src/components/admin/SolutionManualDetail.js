import React, {Component, PropTypes} from 'react';
import BOOKS from '../../constants/fakeData';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

class SolutionManualDetail extends Component {
  constructor() {
    super();
    this.state = {
      solutionManual: {},
      imageFile: '',
      chapter: '',
      subchapter: '',
      exercise: '',
    }

    this.renderChapters = this.renderChapters.bind(this);
    this.onSubmitUploadForm = this.onSubmitUploadForm.bind(this);
    this.onChangeFileInput = this.onChangeFileInput.bind(this);
  }

  componentWillMount() {
    const bookNameRoute = this.props.params.bookNameUrl;
    const solutionManual = BOOKS.filter(book => book.urlName === bookNameRoute)[0];
    if (!solutionManual) browserHistory.push('/solving1213');
    this.setState({solutionManual});
  }

  renderChapters() {
    const {solutionManual} = this.state;
    return solutionManual.chapters && solutionManual.chapters.map(chapter => {
      if (solutionManual.hasSubchapters) {
        return chapter.subchapters.map(subchapter => {
          return subchapter.exercises.map(exercise => {
            return createRow(chapter, subchapter, exercise); 
          });
        });
      } else {
        return chapter.exercises.map(exercise => {
          return createRow(chapter, null, exercise);   
        });
      }
    });
    function createRow(chapter, subchapter, exercise) {
      return (
        <tr>
          <td>{chapter.number} - {chapter.name}</td>
          {subchapter ? <td>{subchapter.number} - {subchapter.name}</td> : null}
          <td>{exercise}</td>
          <td>
            <span className="push-half--right">Editar</span>
            <span>Eliminar</span>
          </td>
        </tr>
      );
    }
  }

  onSubmitUploadForm(e) {
    e.preventDefault();
    const { imageFile, chapter, subchapter, exercise } = this.state;
    const storageRef = firebase.storage().ref(`d13VdWtP3XKpYiuu9xajqS7HVC3/${imageFile.name}`);
    const task = storageRef.put(imageFile);
    task.on('state_changed',
      function complete(response) {
        const imageUrl = response.a && response.a.downloadURLs[0];
        const databasePath = `solutionManuals/d13VdWtP3XKpYiuu9xajqS7HVC3/chapters/${chapter-1}/subchapters/${subchapter-1}/exercises/${exercise-1}`;
        firebase.database().ref(databasePath).set({ 
          imageUrl,
          number: exercise
        });
      },
      function error(err) {
        console.error(err);
      }
    )
  }

  onChangeFileInput(e) {
    e.preventDefault();
    const imageFile = e.target.files[0];
    this.setState(getDataFromImageFile(imageFile));
    function getDataFromImageFile(imageFile) {
      const name = imageFile.name.substr(0, imageFile.name.lastIndexOf('.'));
      const array = name.split('-');
      const data = {
        imageFile,
        chapter: array[0],
        exercise: array[array.length - 1],
      }
      data.subchapter = array.length === 2 ? null : array[1];
      return data
    }
  }

  render() {
    const { solutionManual } = this.state;
    return (
      <div className="container">
        <h1>{this.state.solutionManual.name}</h1>
        <div className="push--bottom">
          <form onSubmit={this.onSubmitUploadForm}>
            <input type="file" className="push-half--right" onChange={this.onChangeFileInput} />
            <button>Cargar Imagenes</button>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Capitulo</th>
              {solutionManual && solutionManual.hasSubchapters ? <th>Subcapitulo</th> : null }
              <th>Ejercicio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.renderChapters()}
          </tbody>
        </table>
      </div>
    );
  }
}

SolutionManualDetail.propTypes = {
  params: PropTypes.object,
};

export default SolutionManualDetail;