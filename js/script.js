'strict mode';


// // let user = 'John', age = 25, message = 'Hello';
// // console.log(user, age, message);

// num = 5;

// const myBirthday = '10.11.1990';

// // const myBirthday = '10.11.1991';
// console.log(myBirthday);

// const arr = [1,2,3,4,5];

// const obj = {
//   name: 'John',
//   age: 25,
//   0: 1,
//   c: true
// };

// console.log(obj[c]);

// console.log(arr[1]);  


// let incr = 10;
//   decr = 10;

// // incr++;
// // decr--;

// console.log(incr++, decr--);

// console.log(5%2);

// let answer = prompt('Are you here?', 'yes');
// console.log(typeof answer);

const questions = [];

questions[0] = prompt('Are you here?', 'yes');
questions[1] = +prompt('How old are you?', '5');
questions[2] = prompt('Where are you from?', 'city');
questions[3] = prompt('What is your name?', 'name');

let obj = {
  name: 'Vova',
  age: 25,
}

questions[4] = obj;
console.log(questions);