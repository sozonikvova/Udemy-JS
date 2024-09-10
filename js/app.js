'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '4');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
  b = +prompt('На сколько оцените его?', ''),
  с = prompt('Один из последних просмотренных фильмов?', ''),
  d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b; // запись в объект свойства movies первого фильма 
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);