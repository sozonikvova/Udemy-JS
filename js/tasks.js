'use strict';


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

promotion(convert(500, usdCurr));

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
}

test();


function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(6));


// function getMathResult(base, times) {
//   let result = '';

//   for (let i = base; i < base * times; i += times) {
//     result = `${base}---`
//   }

//     return result;
// }

// console.log(getMathResult(2, 5));



// let result = '';

// for (let i = 0; i <= 10; i++) {
//   result += i;
//   if (i === 10) {
//     break;
//   }
//   for (let i = 0; i < 1; i++) {
//     result += '---';

//   }
// }

// console.log(result);

// function getMathResult(base, times) {
//   let result = '';
//   for (let i = base; i <= times * base; i += base) {
//     result += i;
//     if (i === base * times) {
//       break;
//     }
//     for (let i = 0; i < 1; i++) {
//       result += '---'
//     }
//   }
//   return result;
// }

// console.log(getMathResult(3, 10));



// function getMathResult(num, times) {
//   if (typeof (times) !== 'number' || times <= 0) {
//     return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }

//   return str;
// }

// getMathResult(10, 5);




// function fibonacciSequence(n) {
//   let a = 0; // перше число
//   let b = 1; // друге число
//   let temp; // змінна для зберігання нового числа
//   let result = ""; // змінна для зберігання результату як рядка

//   result += a; // додаємо перше число
//   if (n > 1) {
//     result += ", " + b; // додаємо друге число
//   }

//   for (let i = 2; i < n; i++) {
//     temp = a + b; // обчислюємо нове число
//     result += ", " + temp; // додаємо нове число до рядка
//     a = b; // оновлюємо a
//     b = temp; // оновлюємо b
//   }

//   return result; // повертаємо результат як рядок
// }

// // Викликаємо функцію для отримання перших n чисел Фібоначчі в рядку
// let fibonacciString = fibonacciSequence(10);
// console.log(fibonacciString);

function fib(num) {

  if (typeof num !== 'number' || typeof num === !Number.isInteger(num)) {
    return '';
  }

  let firstNum = 0,
    secondNum = 1,
    result = "";

  const count = 4;

  result += firstNum;
  if (count > 1) {
    result += ", " + secondNum
  }

  for (let i = 2; i < count; i++) {

    let temp = firstNum + secondNum;
    result += ", " + temp;
    firstNum = secondNum;
    secondNum = temp;


  }
  return result;

}

console.log(fib(4));