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
      return (
        <li>{chapter.number} - {chapter.name}</li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.solutionManual.name}</h1>
        <ul>{this.renderChpaters()}</ul>
      </div>
    );
  }
}

export default SolutionManualDetail;