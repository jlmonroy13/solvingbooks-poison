import React from 'react';
import { InitialSearchContainer } from '../containers';

const HomePage = () => (
  <div className="landing-page">
    <h1>
      <img src={require('../assets/images/logo.svg')} alt="El Solucionario" className="landing-page__logo"/>
    </h1>
    <div className="text--center">
      <p className="landing-page__legend">Encuentra ejercicios resueltos de los libros de ingeniería que necesitas</p>
    </div>
    <InitialSearchContainer />
  </div>
);

export default HomePage;
