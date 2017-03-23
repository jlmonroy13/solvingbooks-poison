const BOOKS = [
  {
    name: "Libro 1",
    chapters: [
      {
        number: '1',
        exercises: null,
        subchapters: [
          {
            number: '1',
            exercises: ['1', '2', '4', '5', '6', '10']
          },
          {
            number: '4',
            exercises: ['1', '2', '4', '5', '6', '10']
          },
          {
            number: '40',
            exercises: ['1', '2', '4', '5', '6', '10']
          }
        ]
      },
      {
        number: '2',
        exercises: null,
        subchapters: [
          {
            number: '1',
            exercises: ['4', '7', '14', '28', '66', '40']
          }
        ]
      }
    ]
  },
  {
    name: "Libro 2",
    chapters: [
      {
        number: '1',
        exercises: ['1', '2', '4', '5', '6', '10'],
        subchapters: null
      },
      {
        number: '8',
        exercises: null,
        subchapters: [
          {
            number: '1',
            exercises: ['4', '7', '14', '28', '66', '40']
          }
        ]
      }
    ]
  }
];

export default BOOKS;
