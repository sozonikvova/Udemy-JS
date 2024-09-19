'use strict';

const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },

  makeTest: function () {
    console.log("Test");
  } // Method created
};

options.makeTest();


const {border, bg} = options.colors; // деструктуризація даних 

console.log(border);

console.log(Object.keys(options).length);
// console.log(options.name)

// delete options.name;

// console.log(options);
// let counter = 0;

// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Option ${i} has option ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Option ${key} has option ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);



