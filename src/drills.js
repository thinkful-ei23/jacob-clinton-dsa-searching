'use strict';

// input: '223.12'
// output: 'Clean Code'

const library = {
  '0': {},
  '1': {},
  '2': {
    '0': {
      '0': {},
      '1': {},
      '2': {},
      '3': {}
    },
    '1': {
      '0': {},
      '1': {},
      '2': {},
      '3': {}
    },
    '2': {
      '0': {},
      '1': {},
      '2': {},
      '3': {
        '001': 'Moby Dick',
        '002': 'Brian Dick',
        '12': 'Clean Code'
      }
    },
    '3': {
      '0': {},
      '1': {},
      '2': {},
      '3': {}
    }
  },
  '3': {}
};

function findBook(ddn) {
  let digit1 = ddn[0];
  // console.log('digit1', digit1);
  let digit2 = ddn[1];
  // console.log('digit2', digit2);
  let digit3 = ddn[2];
  // console.log('digit3', digit3);
  let bookNum = ddn.slice(4);
  // console.log('bookNum', bookNum);

  return library[digit1][digit2][digit3][bookNum];
}

console.log(findBook('223.12'));
