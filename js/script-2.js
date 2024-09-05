// const name = prompt('Enter name', 'Vova');

// alert(`Hello, ${name}!`);

// let value = true;
// console.log(typeof value);

// value = String(value);
// console.log(typeof value);

// console.log('6' / '2');

// arr = ' 7';
// arr = Number(arr);

// console.log(arr + '8');


// let y = 16
// console.log(y ** (1 / 3));


// console.log(8 + (2 + '1'));


// const a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// console.log(a);


// let counter = 1;


// console.log(" \t \n" - 2);


// let year = prompt('in what year ECMAScript was released', '');
// if (year < 2016) {
//   alert('Canceled');
// } else {
//   alert('Не вводити нічого');
// }

// let number = +prompt('Enter number', '1');
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let a = 4,
//   b = 5;

// let result = (a + b < 4) ? console.log('Below') : console.log('Over');


// let login = prompt('Enter login', '');

// if (login == 'Admin') {
//   let password = prompt('Enter password', '');
//   if (password == '' || password == null) {
//     alert('Canceled');
//   } else if (password == 'TheMaster') {
//     alert('Welcome!');
//   } else {
//     alert('Wrong password');
//   }
// } else {
//   alert('I don\'t know you');
// }



// let i = 0;
// do {
//   console.log(i);
//   i++;
//   if (i == 1) {
//     continue;
//   }
// } while (i < 3);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }



// for (let i = 2; i < 11; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`число ${i}!`);
// }

// let i = 0;
// do {
//   console.log(`число ${i}!`);
//   i++;
// } while (i < 3)

// let num = 101;

// do {
//   num = prompt('Enter number', '');
// } while (num <= 100)

// let n = 10;

// for (i = 2; i < n; i++) {
//   if (n / 1 == n && n % i !== 0) {
//     console.log(i);
//   }
// }

// let n = 3;

// for (i = 0; i < 11; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }


// let a = 8;
// let sum = 0;
// for (i = 1; i <= a; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let sum = 0;

// for (let i = 1; i < 100; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i
//   }
// }
// console.log(sum);

// let multiple = 5;
// for (i = 1; i < 10; i++) {
//   console.log(`${multiple} * ${i} = ${multiple * i}`);
// }

// let number = 1234;
// for (i = 0; i < number.; i++) {
//   console.log(i);
// }




switch (browser) {
  case 'Edge':
    alert("You've got the Edge!");
    break;
  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert('Ми підтримуємо і ці браузери');
    break;

  default:
    alert('Маємо надію, що ця сторінка виглядає добре!');
}

let browser = 'Chrome';

if (browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (browser === 'Chrome' && 'Opera' && 'Safari') {
  console.log('We support this browsers');
} else {
  console.log('We hope page looks good!');
}

let a = 5;

switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');
    break;
  default: console.log('none');
}

for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

let i = 2;

do {
  if (i % 2 !== 0) {
    console.log(i);
  }

  i++;
} while (i <= 16);


// let arr = [];

// for (let i = 5; i < 11; i++) {
//   arr[i - 5] = i;
// }
// console.log(arr);

// let result = [];

// let arr = [1, 2, 3, 4, 5];

// for (i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);

// let result = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < result.length; i++) {
//   if (typeof result[i] == 'number') {
//     result[i] = result[i] * 2;
//   } else if (typeof result[i] == 'string') {
//     result[i] = `${result[i]} - done`;
//   }
// }

// console.log(result);

// let newArr = [];
// const data = [5, 10, 'Shopping', 20, 'Homework', 5];

// for (let i = 0; i <= data.length; i++) {
//   newArr[i - 1] = data[data.length - i];
// }
// console.log(newArr);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - i]
// }

// console.log(result);

let lines = 6;

let result = '';

for (i = 0; i < lines; i++) {
  for (j = 0; j < lines - i; j++) {
    result += ' ';
  }
  for (k = 0; k < 2 * i + 1; k++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);



function calculateVolumeAndArea(a) {
  let volume;
  volume = Math.pow(a, 3);
  if (typeof a == 'string') {
    console.log('Error');
  } else return volume;

}

console.log(calculateVolumeAndArea(5));