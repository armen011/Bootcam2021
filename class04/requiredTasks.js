////Task
// let a = [15, 225, 36, 96, 102];
// for (var i = 0; i < a.length; i++) {
//   console.log("for", i, a[i]);
// }

// i = 0;
// while (i < a.length) {
//   console.log("while", i, a[i++]);
// }
// i = 0;

// do {
//   console.log("do while", i, a[i++]);
// } while (i < a.length);

////Task 1
// let numTask2 = 7;
// if (numTask2 % 2 === 0) {
//   console.log(numTask2, "Even");
// } else {
//   console.log(numTask2, "odd");
// }

////Task 2
// let aAngle = 30;
// let bAngle = 60;
// let cAngle = 180 - aAngle - bAngle;
// console.log(cAngle);

// //Task3
// let numTask3 = 8;
// numTask3 = String(numTask3);
// numTask3 = numTask3.split("");
// if (numTask3[numTask3.length - 1] !== "0") {
//   let temp = numTask3[0];
//   numTask3[0] = numTask3[numTask3.length - 1];
//   numTask3[numTask3.length - 1] = temp;
// }
// numTask3 = parseInt(numTask3.join(""));

// console.log(numTask3);

// //Task4
// let numTask4 = 24;
// if (numTask4 % 3 === 0 && numTask4 % 5 === 0 && numTask4 % 7 === 0) {
//   console.log(`${numTask4} is a multiple of 3, 5 and 7.”`);
// } else if (numTask4 % 3 === 0 && numTask4 % 5 === 0) {
//   console.log(`${numTask4} is a multiple of 3 and 5`);
// } else if (numTask4 % 3 === 0 && numTask4 % 7 === 0) {
//   console.log(`${numTask4} is a multiple of 3 and 7`);
// } else if (numTask4 % 5 === 0 && numTask4 % 7 === 0) {
//   console.log(`${numTask4} is a multiple of 7 and 5`);
// } else if (numTask4 % 3 === 0) {
//   console.log(`${numTask4} is a multiple of 3`);
// } else if (numTask4 % 5 === 0) {
//   console.log(`${numTask4} is a multiple of 5`);
// } else if (numTask4 % 7 === 0) {
//   console.log(`${numTask4} is a multiple of 7`);
// } else {
//   console.log(`${numTask4} is not a multiple of 3, 5 or 7`);
// }

// //Task 5
// let a = -23;
// let b = -456;
// let c = 0;
// let temp;
// if (b < a && b > c) {
//   console.log(a, b, c);
// } else if (b < c && b > a) {
//   console.log(c, b, a);
// } else if (c < a && c > b) {
//   console.log(a, c, b);
// } else if (c < b && c > a) {
//   console.log(b, c, a);
// } else if (a < b && a > c) {
//   console.log(b, a, c);
// } else if (a < c && a > b) {
//   console.log(c, a, b);
// }

// //Task 6
// let a = -2;
// let b = 6;
// let c = 8;
// let sum = 0;
// if (a < 0) {
//   sum++;
// }
// if (b < 0) {
//   sum++;
// }
// if (c < 0) {
//   sum++;
// }
// if (a === 0 || b === 0 || c === 0) {
//   console.log("Unsigned");
// } else if (sum % 2 === 0) {
//   console.log("+");
// } else {
//   console.log("-");
// }

// //Task 7
// let numTask7 = 45678;
// let digTask7 = 1;
// numTask7 = numTask7.toString();
// numTask7 = numTask7.split("");
// digTask7 = digTask7.toString();
// if (numTask7.includes(digTask7)) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// //Task 8
// let numTask8 = 13;
// let a;
// let arrNum = [];
// while (numTask8 > 0) {
//   a = parseInt(numTask8 % 10);
//   arrNum.unshift(a);
//   numTask8 = (numTask8 - a) / 10;
// }
// a = arrNum[0];
// arrNum[0] = arrNum[arrNum.length - 1];
// arrNum[arrNum.length - 1] = a;
// numTask8 = arrNum.join("");
// numTask8 = parseInt(numTask8);
// console.log(numTask8);

// //Task 9
// let numTask9 = 63;
// let bool = true;
// if (numTask9 === 2) {
//   bool = true;
// } else if (numTask9 % 2 === 0) {
//   bool = false;
// } else {
//   for (let i = 3; i < numTask9 / 2; i++) {
//     if (numTask9 % i === 0) {
//       bool = false;
//     }
//   }
// }
// if (bool) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// //Task 10
// let n = 8;
// let arr = [0, 1];
// for (let i = 1; i < n - 1; i++) {
//   arr.push(arr[i] + arr[i - 1]);
// }
// console.log(arr[n - 1]);
