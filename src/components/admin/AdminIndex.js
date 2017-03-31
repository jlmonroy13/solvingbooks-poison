import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class AdminIndex extends Component {
  constructor() {
    super();

    this.renderBooksList = this.renderBooksList.bind(this);
  }

  renderBooksList() {
    const { solutionManuals } = this.props;
    return solutionManuals.map(book => {
      return (
        <li key={book.name}>
          <Link to={`/solving1213/solucionario/${book.urlName}`}>{book.name}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Solucionarios</h1>
        <Link to="/solving1213/crear-solucionario" className="button button--wide button--gray bold">Crear Solucionario</Link>
        <ul>{this.renderBooksList()}</ul>
      </div>
    );
  }
}

AdminIndex.propTypes= {
  solutionManuals: PropTypes.array,
};

export default AdminIndex;
