// //Task1
// const sum = (num = 0) => {
//   addNum = (b) => {
//     num;
//     console.log(num + b);
//   };
//   return addNum;
// };
// sum(1)(2); //3
// const addOne = sum(1);
// addOne(2); //3
// const addTen = sum(10);
// addTen(2); //12
// addOne(4);//5
// addTen(10);//20

// //Task2
// const redundant = (str) => {
//   fun = () => {
//     console.log(str);
//   };
//   return fun;
// };
// const f1 = redundant("Apple");
// f1();
// const f2 = redundant("Pear");
// f2();
// const f3 = redundant("");
// f3();

// //Task3

// const add_suffix = (suf) => {
//   add = (str) => {
//     console.log(str + suf);
//   };
//   return add;
// };
// add_ly = add_suffix("ly");
// add_ly("hopeless");
// add_ly("total");

// add_less = add_suffix("less");
// add_less("fear");
// add_less("ruth");

// //Task4
// const printAfter = (print) => {
//   console.log("Hello World");
//   return print();
// };

// const print = () => console.log("Elon Musk");
// printAfter(print);

// //Task5
// const filterFalsyValues = (values) => {
//   res = [];
//   for (let i of values) {
//     if (i) {
//       res.push(i);
//     }
//   }
//   print = () => {
//     console.log(res);
//   };
//   return print();
// };
// const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
// filterFalsyValues(values);
// filterFalsyValues(["hello", 1233, []]);

// //Task6
// const filterByLength = (arr) => {
//   res = [];
//   for (let i of arr) {
//     if (i.length > 3) {
//       res.push(i);
//     }
//   }
//   print = () => {
//     console.log(res);
//   };
//   return print();
// };
// filterByLength(["kia", "tesla", "bmw", "mercedes"]);

// //Task7
// const isElementsUnique = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// console.log(isElementsUnique(["arm", "kar", "suren", "ashot", "arm"]));

// //Task8
// const isogram = (str) => {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === " ") {
//       } else if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// console.log(isogram("artashat"));

// //Task9
// const sum = (arr) => {
//   let sum = 0;
//   for (let i of arr) {
//     if (i % 2 === 0) {
//       sum += i ** 2;
//     } else {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sum([1, 2, 3, 5, 7, 4]));

// //Task10
// const palidrom = (str) => {
//   let temp = str;
//   if (str.length % 2 === 0) {
//     length = str.length / 2;
//   } else {
//     length = Math.round(str.length / 2);
//   }
//   temp = temp.substring(0, length);

//   for (let i = 0; i < temp.length; i++) {
//     if (str[str.length - 1 - i] === temp[i]) {
//     } else {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(palidrom("repaper"));

// //Task11
// const adjacentProduct = (arr) => {
//   let prod = arr[0] * arr[1];
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] * arr[i + 1] > prod) {
//       prod = arr[i] * arr[i + 1];
//     }
//   }
//   return prod;
// };
// console.log(adjacentProduct([1, 2, 3, 4, 5, 2, 1, 3, 1, 6]));
