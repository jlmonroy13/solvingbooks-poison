import React from 'react';
import { InitialSearchContainer, AuthenticationModalContainer } from '../containers';

const HomePage = () => (
  <div className="center-x-y">
    <h1 className="text--larger text--center push--bottom soft-half--bottom">El Solucionario.io</h1>
    <InitialSearchContainer />
    <AuthenticationModalContainer />
  </div>
);

export default HomePage;
