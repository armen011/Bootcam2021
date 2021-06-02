//Task1
////Variant A
// function findSum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const [first, ...rest] = arr;
//   return first + findSum(rest);
// }
// console.log(findSum([1, 2, 3, 4, 5]));

// //Variant B
// function findSum(arr) {
//   function inter(arr, acc) {
//     if (arr.length === 0) {
//       return acc;
//     }
//     const [first, ...rest] = arr;
//     acc += first;
//     return inter(rest, acc);
//   }

//   return inter(arr, 0);
// }
// console.log(findSum([1, 2, 3, 4, 5]));

//Task2
// function findFact(n) {
//   if (n === 0) {
//     return 1;
//   }
//   if (n === 1) {
//     return n;
//   }
//   return n * findFact(n - 1);
// }
// console.log(findFact(6));

// //Task3
// function fib(n) {
//   if (n === 1) {
//     return 0;
//   }
//   if (n == 2) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(1));

// //Task4
// function addBrackets(s) {
//   function inter(arr, acc, len) {
//     if (arr.length === 0) {
//       return acc;
//     }
//     const [first, ...rest] = arr;
//     if (acc.length / 2 === Math.floor(len / 2)) {
//       if (len % 2 == 0) {
//         acc += first + ")";
//       } else {
//         acc += "(" + first + ")";
//       }
//     } else {
//       if (acc.length / 2 < len / 2) {
//         acc += "(" + first;
//       } else {
//         acc += first + ")";
//       }
//     }
//     return inter(rest, acc, len);
//   }
//   arr = s.split("");
//   return inter(arr, "", arr.length);
// }
// const s = "LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO";
// console.log(addBrackets(s));

// //Task5
// function subsetSum(arr) {
//   arr.unshift(0);
//   function inter(arr, acc) {
//     if (arr.length === 0) {
//       return acc;
//     }
//     const [first, ...rest] = arr;
//     function subSum(first, rest, i, acc) {
//       if (i === rest.length) {
//         return acc;
//       }
//       acc += first + rest[i];
//       i++;
//       return subSum(first, rest, i, acc);
//     }
//     acc += subSum(first, rest, 0, "");
//     return inter(rest, acc);
//   }
//   function allSum(arr, acc, i) {
//     if (i === arr.length) {
//       return acc;
//     }
//     acc += arr[i];
//     i++;
//     return allSum(arr, acc, i);
//   }
//   let res;
//   if (arr.length === 3) {
//     res = inter(arr, "0");
//   } else {
//     res = inter(arr, "0") + allSum(arr, 0, 0);
//   }
//   return res;
// }
// console.log(subsetSum([2, 4, 5]));
