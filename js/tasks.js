'use strict';

// function getName(name) {
//   return `Hello, ${name}!`;
// }

// console.log(getName('Trio'));


// function getString(base, repeat) {
//   let result = '';
//   // if (typeof (times) !== 'number' || times <= 0) {
//   //   return base;
//   // }
//   for (let i = 0; i < repeat * base; i += base) {

//     result += base + i;
//     result += '---';
//   }
//   return result;

// }
// console.log(getString(7, 4));


// let o = 5;

// for (let i = 0; i < 15; i = i + 5) {
//   console.log(i);
// }

// let userName = 'Іван';

// function showMessage() {
//   userName = 'Богдан'; // (1) змінено зовнішню змінну

//   let message = 'Здоровенькі були, ' + userName;
//   console.log(message);
// }

// console.log(userName);// Іван перед викликом функції showMessage

// showMessage();

// console.log(userName); // Богдан, значення було змінено після виклику функції showMessage


// function showMessage(from, text) { // параметри: from, text
//   console.log(from + ': ' + text);
// }


// showMessage('Вася', 'Привіт'); // 'Вася: Привіт'


function showMessage(from, text) {

  from = '*' + from + '*'; // прикрашаємо "from"

  console.log(from + ': ' + text);
}

let from = "Анна";

showMessage(from, "Привіт"); // *Анна*: Привіт

// значення "from" те саме, функція змінила локальну копію
alert(from); // Анна