import React from 'react';
import { InitialSearchContainer, AuthenticationModalContainer } from '../containers';

const HomePage = () => (
  <div className="center-x-y text--center">
    <h1 className="search__main-title">ElSolucionario.io</h1>
    <InitialSearchContainer />
    <AuthenticationModalContainer />
  </div>
);

export default HomePage;
