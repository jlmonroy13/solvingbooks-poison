const BOOKS = [
  {
    name: "Howard Anton - Introduccion al Algebra Lineal - 9na. Edicion",
    urlName: "howard-anton-introduccion-al-algebra-lineal-9na-edicion",
    hasSubchapters: true,
    chapters: [
      {
        number: '1',
        name: "Metodos de Analisis",
        exercises: null,
        subchapters: [
          {
            number: '1',
            name: 'Norton',
            exercises: ['1', '2', '4', '5', '6', '10']
          },
          {
            number: '4',
            name: 'Thevenin',
            exercises: ['1', '2', '4', '5', '6', '10']
          },
          {
            number: '40',
            name: 'Transformacion de Fuentes',
            exercises: ['1', '2', '4', '5', '6', '10']
          }
        ]
      },
      {
        number: '2',
        name: "Teoremas de Circuitos",
        exercises: null,
        subchapters: [
          {
            number: '1',
            name: 'Senoides',
            exercises: ['4', '7', '14', '28', '66', '40']
          }
        ]
      }
    ]
  },
  {
    name: "William Hayt - Analisis de Circuitos en Ingenieria - 7ma. Edicion",
    urlName: "william-hayt-analisis-de-circuitos-en-ingenieria-7ma-edicion",
    hasSubchapters: false,
    chapters: [
      {
        number: '1',
        name: 'Thevenin',
        exercises: ['1', '2', '4', '5', '6', '10'],
        subchapters: null
      },
      {
        number: '2',
        name: 'Ley de Ohm',
        exercises: ['1', '2', '4', '5', '6', '16'],
        subchapters: null
      }
    ]
  }
];

export default BOOKS;
