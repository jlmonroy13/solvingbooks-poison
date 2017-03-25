import React, {Component} from 'react';
import BOOKS from '../../constants/fakeData';
import { Link } from 'react-router';

class AdminIndex extends Component {
  constructor() {
    super();

    this.renderBooksList = this.renderBooksList.bind(this);
  }
  
  renderBooksList() {
    return BOOKS.map(book => {
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
        <Link to="" className="button button--wide button--gray bold">Crear Solucionario</Link>
        <ul>{this.renderBooksList()}</ul>
      </div>
    );
  }
}

export default AdminIndex;