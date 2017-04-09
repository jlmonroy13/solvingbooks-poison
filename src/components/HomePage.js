import React from 'react';
import { InitialSearchContainer } from '../containers';

const HomePage = () => (
  <section className="landing-page">
    <h1 className="landing-page__title">
      <span className="sr-only">El Solucionario</span>
      <img src="../assets/images/logo.svg" alt="Logo El Solucionario" className="landing-page__logo"/>
    </h1>
    <div className="text--center">
      <p className="landing-page__legend">Todas las respuestas en un solo lugar</p>
    </div>
    <InitialSearchContainer />
  </section>
);

export default HomePage;
