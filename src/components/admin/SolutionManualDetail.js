import React, {Component, PropTypes} from 'react';
import * as firebase from 'firebase';
import Alert from 'react-s-alert';

class SolutionManualDetail extends Component {
  constructor() {
    super();
    this.state = {
      imageFiles: [],
    };

    this.renderChapters = this.renderChapters.bind(this);
    this.onSubmitUploadForm = this.onSubmitUploadForm.bind(this);
    this.onChangeFileInput = this.onChangeFileInput.bind(this);
  }

  renderChapters() {
    const { solutionManual } = this.props;
    return solutionManual.chapters && solutionManual.chapters.map(chapter => {
      if (solutionManual.hasSubchapters) {
        return chapter.subchapters.map(subchapter => {
          return subchapter.exercises.map(exercise => {
            return createRow(chapter, subchapter, exercise);
          });
        });
      } else {
        return chapter.exercises && chapter.exercises.map(exercise => {
          return createRow(chapter, null, exercise);
        });
      }
    });
    function createRow(chapter, subchapter, exercise)  {
      return (
        <tr>
          <td>{chapter.number} - {chapter.name}</td>
          {subchapter ? <td>{subchapter.number} - {subchapter.name}</td> : null}
          <td>{exercise.number}</td>
          <td>
            <a href={exercise.imageUrl} target="_blank">{exercise.imageUrl}</a>
          </td>
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
    const { imageFiles } = this.state;
    const { solutionManual } = this.props;
    for (let i=0; i < imageFiles.length; i++) {
      const storageRef = firebase.storage().ref(`${solutionManual.id}/${imageFiles[i].name}`);
      const task = storageRef.put(imageFiles[i]);
      const { chapter, subchapter, exercise, imageFile } = getDataFromImageFile(imageFiles[i]);
      task.on('state_changed',
        function complete(response) {
          const imageUrl = response.a && response.a.downloadURLs[0];
          const subchapterPath = solutionManual.hasSubchapters ? `/subchapters/${subchapter-1}` : '';
          const databasePath =  `solutionManuals/${solutionManual.id}/chapters/${chapter-1}${subchapterPath}/exercises/${exercise-1}`;
          firebase.database().ref(databasePath).set({
            imageUrl,
            number: exercise
          });
          if (response.a) Alert.success(`El ejercicio ${imageFile.name} se ha cargado exitosamente!`);
        },
        function error(err) {
          Alert.success(err);
        }
      );
    }
    function getDataFromImageFile(imageFile) {
      const name = imageFile.name.substr(0, imageFile.name.lastIndexOf('.'));
      const array = name.split('-');
      const data = {
        imageFile,
        chapter: array[0],
        exercise: array[array.length - 1],
      };
      data.subchapter = array.length === 2 ? null : array[1];
      return data;
    }
  }

  onChangeFileInput(e) {
    e.preventDefault();
    const imageFiles = e.target.files;
    this.setState({imageFiles});
  }

  render() {
    const { solutionManual } = this.props;
    return (
      <div className="container">
        <h1>{solutionManual.name}</h1>
        <div className="push--bottom">
          <form onSubmit={this.onSubmitUploadForm}>
            <input type="file" className="push-half--right" onChange={this.onChangeFileInput} multiple/>
            <button>Cargar Imagenes</button>
          </form>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Capitulo</th>
              {solutionManual && solutionManual.hasSubchapters ? <th>Subcapitulo</th> : null }
              <th>Ejercicio</th>
              <th>Url de la Imagen</th>
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
  solutionManuals: PropTypes.array,
  solutionManual: PropTypes.object,
};

export default SolutionManualDetail;
