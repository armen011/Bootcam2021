// //Task1
// const checkAllDigits = function (number) {
//   let check = number % 10;
//   changed = Math.floor(number / 10);
//   if (check % 2 === 0) {
//     return false;
//   } else if (changed === 0) {
//     return true;
//   }
//   return checkAllDigits(changed);
// };
// console.log(checkAllDigits(5));

// //Task2
// const findMinimalPositive = function (arr) {
//   inter = (arr, acc = -1) => {
//     [first, ...rest] = arr;
//     if (arr.length === 0) {
//       return acc;
//     }
//     if (first >= 0 && acc === -1) {
//       acc = first;
//     } else if (first < acc && first >= 0) {
//       acc = first;
//     }
//     return inter(rest, acc);
//   };
//   return inter(arr);
// };
// console.log(findMinimalPositive([-5, -9, -111, -1000, -7]));

// //Task3
// const findViolation = function (arr) {
//   function inter(arr, acc = -1, index = 0) {
//     [first, ...rest] = arr;
//     if (arr.length === 0) {
//       return acc;
//     }
//     if (acc === false) {
//       return index;
//     }

//     if (first > rest[0]) {
//       acc = false;
//     }
//     index++;
//     return inter(rest, acc, index);
//   }
//   return inter(arr);
// };
// console.log(findViolation([-9, -4, -4, 3, 12, 4, 5]));

// //Task4
// const removeFirstElement = function (arr) {
//   if ((arr.length = 0)) {
//     return arr;
//   }
//   [firts, ...rest] = arr;
//   return rest;
// };
// // console.log(removeFirstElement([]));
// //Task5

// const flattenArr = function (arr) {
//   function inter(arr, acc = []) {
//     if (arr.length === 0) {
//       return acc;
//     }
//     [first, ...rest] = arr;
//     if (Array.isArray(first)) {
//       rest = [...first, ...rest];
//     } else {
//       acc = [...acc, first];
//     }
//     return inter(rest, acc);
//   }
//   return inter(arr);
// };
// console.log(flattenArr([14, [1, [[[3, []]], 1], 0]]));

// //Task6
// const rotateByN = function (arr, n) {
//   function inter(arr, n, acc = []) {
//     if (acc.length === n) {
//       return [...rest, ...acc];
//     } else if (arr.length === Math.abs(n)) {
//       return [...arr, ...acc];
//     }
//     [first, ...rest] = arr;
//     acc = [...acc, first];
//     return inter(rest, n, acc);
//   }
//   return inter(arr, n);
// };
// console.log(rotateByN(["a", "b", "c", "d", "e", "f", "g", "h"], -2));

// //Task7
// const sumOfDigits = function (number) {
//   function inter(number, acc = 0) {
//     if (number === 0) {
//       if (acc < 10) {
//         return acc;
//       } else {
//         return inter(acc);
//       }
//     }
//     acc += number % 10;
//     number = Math.floor(number / 10);

//     return inter(number, acc);
//   }
//   return inter(number);
// };
// console.log(sumOfDigits(299));

//Task8
