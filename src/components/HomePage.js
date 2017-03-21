import React from 'react';
import { SearchFormContainer, AuthenticationModalContainer } from '../containers';
import AuthenticationModal from './AuthenticationModal';

const HomePage = () => (
  <div className="container">
    <h1>El Solucionario</h1>
    <SearchFormContainer />
    <AuthenticationModalContainer />
  </div>
);

export default HomePage;
