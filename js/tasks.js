'use strict';

// strings
console.log('string' + 'string'); // 'stringstring'
// strings with numbers
console.log('string' + 123); // 'string123'
// numbers with strings
console.log(123 + 'string'); // '123string'
// numbers with numbers
console.log(123 + 456); // 579
// boolean with strings
console.log(true + 'string'); // 'truestring'
// strings with booleans
console.log('string' + true); // 'stringtrue'
// null with strings
console.log(null + 'string'); // 'nullstring'
// strings with null
console.log('string' + null); // 'stringnull'
// undefined with strings
console.log(undefined + 'string'); // 'undefinedstring'
// strings with undefined
console.log('string' + undefined); // 'stringundefined'
// objects with strings
console.log({} + 'string'); // '[object Object]string'
// strings with objects
console.log('string' + {}); // 'string[object Object]'
// arrays with strings
console.log([] + 'string'); // 'string'
// strings with arrays
console.log('string' + []); // 'string'


console.log(4 + +"5");

let incr = 10,
  decr = 11;

console.log(incr++);

console.log(5 % 2);

const isChecked = false,
  isClose = false;

console.log(!isChecked || !isClose);



personalMovieDB = {
  count: 15,
  movies: [],
  actors: {},
  genres: [],
  privat: false
};

const b = 'Halk';
const c = 2.5;


console.log(personalMovieDB.movies.b = c);