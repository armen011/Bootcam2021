// //Task 11
// let n = 455;
// let sum = 0;
// let prod = 1;
// let a;
// if (n === 0) {
//   console.log("Cannot calculate.");
// } else {
//   while (n > 0) {
//     a = parseInt(n % 10);
//     prod *= a;
//     sum += a;
//     n = (n - a) / 10;
//   }
//   if (prod % sum === 0) {
//     console.log(`Quotient is ${prod / sum}`);
//   } else {
//     console.log(`Remainder is ${parseInt(prod % sum)}`);
//   }
// }

// //Task 12
// let sentence = "If at _ you donʼt _, try, try _.";
// let words = ["first", "succeed", "again"];
// for (let i = 0; i < words.length; i++) {
//   sentence = sentence.replace("_", words[i]);
// }
// console.log(sentence);

// // //Task13
// let arr = [
//   "Ashot",
//   8,
//   10,
//   "Karen",
//   "Vormizduxt",
//   7,
//   1,
//   "Saratak",
//   2,
//   6,
//   3,
//   4,
//   0,
//   null,
// ];
// let numbers = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!isNaN(arr[i]) && arr[i] != null) {
//     if (arr[i] % 2 === 0) {
//       numbers.push(arr[i]);
//     } else {
//       numbers.unshift(arr[i]);
//     }
//   }
// }
// console.log(numbers);

// //Task 14
// let arr = [1, 2, 3, "Karen", 4, "Suro", "Vazgen", 45, 31, "Suro"];
// let sumNumber = 0;
// let sumString = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (!isNaN(arr[i])) {
//     sumNumber++;
//   } else {
//     sumString++;
//   }
// }
// console.log(`Numbers: ${sumNumber}, Strings: ${sumString}`);

// //Task 15
// let arr = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
// let max = 0,
//   min = arr[3].length;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > max) {
//     max = arr[i].length;
//   }
//   if (arr[i].length < min) {
//     min = arr[i].length;
//   }
// }
// console.log(min + max);

// //Task 16
// let numbers = [5, 46, 17, -2, 89, 0, 26];
// let number = 36;
// let index;
// let length = Math.abs(numbers[0] - number);
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === number) {
//     index = i;
//     break;
//   } else if (length > Math.abs(numbers[i] - number)) {
//     length = Math.abs(numbers[i] - number);
//     index = i;
//   }
// }
// console.log(index);

// //Task 17
// sentence = "May the Force be with,you.";
// sentence = sentence.split(/[ ,]+/);
// sentence[sentence.length - 1] = sentence[sentence.length - 1].replace(
//   /[.!]/g,
//   ""
// );

// console.log(sentence);

// //Task 18
// let arr = [26, 30, 19, 5];
// arr.sort(function (a, b) {
//   return a - b;
// });
// let arr1 = [];
// let j = 0;
// for (let i = 0; i <= arr[arr.length - 1]; i++) {
//   if (i === arr[j]) {
//     arr1[i] = arr[j];
//     j++;
//   } else {
//     arr1[i] = undefined;
//   }
// }

// console.log(arr1);

// //Task 19
// let arr = [[1], [2], [3], [4]];
// let sums = [];
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   sums.push(sum);
// }
// console.log(sums);

// //Task20
// let arr = [];
// for (let i = 0; i < 5; i++) {
//   let k = 5;
//   arr[i] = [];

//   for (let j = 0; j <= i; j++) {
//     if (k === 5) {
//       arr[i].push(i + 1);
//     } else {
//       arr[i].push(arr[i][j - 1] + k);
//     }
//     k--;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].join(" "));
// }
