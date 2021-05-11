// //1.Concatenate the two arrays
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];
// const Concatenate = (...arr) => {
//   let res = [];
//   for (let index = 0; index < arr.length; index++) {
//     const innerArray = arr[index];
//     for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
//       const innerElement = innerArray[innerIndex];
//       res.push(innerElement);
//     }
//   }
//   return res;
// };
// const arr3 = Concatenate(arr1, arr2);
// console.log(arr3);

// //2 How to take arguments in sum function?
// function sum(...args) {
//   return args.reduce((sum, current) => {
//     return sum + current;
//   });
// }
// //console.log(sum(1, 2)); // prints 3
// console.log(sum(1, 2, 3)); // prints 6

// //3 How to pass arguments in sum function?

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3];
// [x, y, z] = numbers;
// console.log(sum(x, y, z)); // prints 6

//4.
let a = 3;
let b = 6;
[a, b] = [b, a];
console.log(a); //6
console.log(b); //3

// //5.SORT
// const sortBy = (arr, met) => {
//   const sortByGivenMetode = (a, b) => {
//     if (met === "Asc") {
//       return a - b;
//     } else if (met === "Desc") {
//       return b - a;
//     }
//   };
//   return arr.sort(sortByGivenMetode);
// };
// const arr = [1, 4, 8, 2, 25, 113, 5, 0];

// console.log(sortBy(arr, "Desc"));

//MAP
// //1.Write a function which returns array of usernames.
// const getUserNames = (arr) => {
//   const takeUserNames = (obj) => {
//     return obj.username;
//   };
//   return arr.map(takeUserNames);
// };
// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//   },
// ];
// console.log(getUserNames(users));

// //2.Write a function which returns array of lengths of user names
// const getUsernameLengths = (arr) => {
//   const takeUserNamesLength = (obj) => {
//     return obj.username.length;
//   };
//   return arr.map(takeUserNamesLength);
// };
// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//   },
// ];
// console.log(getUsernameLengths(users));

// //3 Write a function which parses string integers. If it's not possible to parse, then add null

// const parseInteger = (arr) => {
//   const convert = (el) => {
//     const res = parseInt(el);
//     if (isNaN(res)) {
//       return null;
//     } else {
//       return res;
//     }
//   };
//   return arr.map(convert);
// };
// console.log(parseInteger(["1", "px", "2323"]));

//FILTER
// //1.Given an array, return a new array that only includes the numbers.
// const numberArray = (arr) => {
//   const isNumber = (el) => {
//     if (isNaN(el)) {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   return arr.filter(isNumber);
// };
// const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
// console.log(numberArray(arr));

// //2.Write a function which remove users with language equals to 'ru'.
// const filterUsers = (arr) => {
//   const langIsRu = (el) => {
//     if (el.lang === "ru") {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   return arr.filter(langIsRu);
// };
// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//   },
// ];
// console.log(filterUsers(users));

// //3.Write a function which filters object by field.
// const filterByField = (arr) => {
//   const check = (el) => {
//     return el.isAstronaut;
//   };
//   return arr.filter(check);
// };
// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//     isAstronaut: true,
//   },
//   {
//     username: "Nil Armstrong",

//     lang: "ENG",
//     isAstronaut: true,
//   },
//   {
//     username: "Elon Musk",
//     isAstronaut: false,
//   },
// ];
// console.log(filterByField(users, "isAstronaut"));

//REDUCE
// //1.Given an array, return the sum of numbers that are 18 or over.

// const sumOverAndEqualTo18 = (arr) => {
//   const checkAndAdd = (acc, num) => {
//     if (num >= 18) {
//       return acc + num;
//     } else {
//       return acc;
//     }
//   };
//   return arr.reduce(checkAndAdd, 0);
// };
// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
// console.log(sumOverAndEqualTo18(arr));

// //2.Write a function which calculates average age of users.
// const getAverageAge = (arr) => {
//   const average = (acc, user) => {
//     return acc + user.age;
//   };
//   let averAge = arr.reduce(average, 0) / arr.length;
//   return averAge;
// };
// const users = [
//   {
//     username: "Yuri Gagarin",
//     lang: "ru",
//     age: 56,
//   },
//   {
//     username: "Nil Armstrong",
//     lang: "ENG",
//     age: 54,
//   },
// ];
// console.log(getAverageAge(users));
