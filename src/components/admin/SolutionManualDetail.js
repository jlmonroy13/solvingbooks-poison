import React, {Component, PropTypes} from 'react';
import BOOKS from '../../constants/fakeData';
import { browserHistory } from 'react-router';

class SolutionManualDetail extends Component {
  constructor() {
    super();
    this.state = {
      solutionManual: {}
    };

    this.renderChapters = this.renderChapters.bind(this);
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

  render() {
    const { solutionManual } = this.state;
    return (
      <div className="container">
        <h1>{this.state.solutionManual.name}</h1>
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