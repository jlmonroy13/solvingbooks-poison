import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1>El Solucionario</h1>
      <form>
        <div className="grid">
          <div className="grid__item one-quarter">
            <label htmlFor="bookName">Libro</label>
            <input type="text" className="block full-width" id="bookName" placeholder="Escribe el nombre del Libro" />
          </div>
          <div className="grid__item one-quarter">
            <label htmlFor="chapterInput">Capitulo</label>
            <input type="text" className="block full-width" id="chapterInput" placeholder="Escribe el número del Capitulo" />
          </div>
          <div className="grid__item one-quarter">
            <label htmlFor="subChapterInput">Subcapitulo</label>
            <input type="text" className="block full-width" id="subChapterInput" placeholder="Escribe el número del Subcapitulo" />
          </div>
          <div className="grid__item one-quarter">
            <label htmlFor="exerciseInput">Ejercicio</label>
            <input type="text" className="block full-width" id="exerciseInput" placeholder="Escribe el nombre del solucionario" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
