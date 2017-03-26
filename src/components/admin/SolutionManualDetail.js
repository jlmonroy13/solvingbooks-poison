import React, {Component} from 'react';
import BOOKS from '../../constants/fakeData';
import { browserHistory } from 'react-router';

class SolutionManualDetail extends Component {
  constructor() {
    super();
    this.state = {
      solutionManual: {}
    }

    this.renderChpaters = this.renderChpaters.bind(this);
  }

  componentDidMount() {
    const bookNameRoute = this.props.params.bookNameUrl;
    const solutionManual = BOOKS.filter(book => book.urlName === bookNameRoute)[0];
    if (!solutionManual) browserHistory.push('/solving1213');
    this.setState({solutionManual});
  }

  renderChpaters() {
    const {solutionManual} =  this.state;
    return solutionManual.chapters && solutionManual.chapters.map(chapter => {
      return chapter.subchapters.map(subchapter => {
         return subchapter.exercises.map(exercise => {
          return (
            <tr>
              <td>{chapter.number} - {chapter.name}</td>
              <td>{subchapter.number} - {subchapter.name}</td>
              <td>{exercise}</td>
            </tr>
          )  
        });
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.solutionManual.name}</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Capitulo</th>
              <th>Subcapitulo</th>
              <th>Ejercicio</th>
            </tr>
          </thead>
          <tbody>
            {this.renderChpaters()}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default SolutionManualDetail;