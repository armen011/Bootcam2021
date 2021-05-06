// //Task1
// let separate = function (arr = []) {
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       odd.push(arr[i]);
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return [odd, arr];
// };

// console.log(separate([2, 3, 4, 5, 6, 7, 13, 8, 911, 25]));

// //Task 2

// let count = function (arr = [], symb = "+") {
//   let sum = 0;
//   let difference = arr[0];
//   let mult = 1;
//   let divison = arr[0];
//   switch (symb) {
//     case "+":
//       for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//       }
//       return sum;
//     case "-":
//       for (let i = 1; i < arr.length; i++) {
//         difference -= arr[i];
//       }
//       return difference;
//     case "*":
//       for (let i = 0; i < arr.length; i++) {
//         mult *= arr[i];
//       }
//       return mult;
//     case "/":
//       for (let i = 1; i < arr.length; i++) {
//         divison /= arr[i];
//       }
//       return divison;
//   }
// };

// console.log(count([5, 2, 4], "+"));

// //Task3

// let numberCheck = function (number) {
//   number = number.split("");
//   if (number.includes(" ")) {
//     number.splice(number.indexOf(" "), 1);
//   }
//   number = number.join("");

//   if (number.length === 10) {
//     number = number.split("");
//     if (number.includes("+")) {
//       return "Bad number";
//     } else {
//       number = number.join("");
//       return number;
//     }
//   } else if (number.length < 10) {
//     return "Bad number";
//   } else if (number.length > 11) {
//     return "Bad number";
//   } else if (number.length === 11) {
//     number = number.split("");
//     if (number[0] === "+") {
//       number.splice(0, 1);
//       if (number.includes("+")) {
//         return "Bad number";
//       }
//       number = number.join("");
//     } else {
//       return "Bad number";
//     }
//     return number;
//   }
// };
// console.log(numberCheck("123+2356897452"));

//Task4

// let selectCorrectSublist = function (word, arr = []) {
//   let wordLength = word.length;
//   let result = [];
//   let bool = true;
//   word = word.split("");
//   for (let i = 0; i < arr.length; i++) {
//     bool = true;
//     if (arr[i].length === wordLength) {
//       arr[i] = arr[i].split("");
//       for (let j = 0; j < wordLength; j++) {
//         if (arr[i].includes(word[j])) {
//         } else {
//           bool = false;
//           break;
//         }
//       }
//     } else {
//       continue;
//     }
//     if (bool) {
//       result.push(arr[i].join(""));
//     }
//   }
//   return result;
// };
// console.log(
//   selectCorrectSublist("pencil", [
//     "licnep",
//     "circular",
//     "pupil",
//     "nilcpe",
//     "leppnec",
//   ])
// );

// //Task 5
// let sumLargNumber = function (str) {
//   let sum = 0;
//   let number = [];
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) || str[i] === "-") {
//       number.push(str[i]);
//     } else {
//       if (number.length === 0) {
//       } else {
//         sum += Number(number.join(""));
//         number = [];
//       }
//     }
//   }

//   return sum;
// };
// console.log(sumLargNumber("“Wert12lop-12”"));

// //Task6
// let remove = function (sentence = "", word = "") {
//   return sentence.replace(new RegExp(word, "g"), "");
// };
// console.log(
//   remove(
//     "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather",
//     "o"
//   )
// );

// //Task 7
// let computString = function (str) {
//   str = str.split("");
//   let temp;
//   for (let i = 0; i < str.length; i += 3) {
//     if (i + 3 < str.length) {
//       temp = str[i];
//       str[i] = str[i + 1];
//       str[i + 1] = str[i + 2];
//       str[i + 2] = temp;
//     }
//   }
//   return str.join("");
// };
// console.log(computString("aweyoolp"));
// //“weaooylp”
// //“fgdkljypo”

// //Task 8
// let longestWord = function (sentence) {
//   sentence = sentence.split(/[\s,-]+/);
//   let word = sentence[0];

//   for (let i = 0; i < sentence.length; i++) {
//     if (word.length < sentence[i].length) {
//       word = sentence[i];
//     }
//   }
//   return word;
// };
// console.log(
//   longestWord("A revolution without dancing is a revolution not worth having.")
// );

// //Task9
// let find = function (arr, number) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > number) {
//       result.push(arr[i]);
//     }
//   }
//   if (result.length === 0) {
//     return "Such values do not exist.";
//   } else {
//     return result;
//   }
// };
// console.log(find([10, 25, 16, -5, 30, 15, 24], 16));

// //Task  10

// const findLongestSubsrting = (str) => {
//   let longestsubstrings = [];
//   for (let i = 0; i < str.length; i++) {
//     longestsubstrings[i] = [];
//     longestsubstrings[i].push(str[i]);
//     for (let j = i + 1; j < str.length; j++) {
//       if (longestsubstrings[i].includes(str[j]) && str[j] != " ") {
//         break;
//       } else {
//         longestsubstrings[i].push(str[j]);
//       }
//     }
//   }
//   let longestSubstring = longestsubstrings[0].join("");
//   for (let i of longestsubstrings) {
//     if (i.length >= longestSubstring.length) {
//       longestSubstring = i.join("");
//     }
//   }
//   return longestSubstring;
// };

// console.log(findLongestSubsrting("parting your soup is not a miracle, bruce."));

// //Task 11
// const finedNumbersWithEvenDigits = (from, to) => {
//   let check;
//   let bool = true;
//   let res = "";
//   for (let i = from; i <= to; i++) {
//     check = i;
//     while (check > 0) {
//       if (check % 2 != 0) {
//         bool = false;
//         break;
//       } else {
//         check = (check - (check % 10)) / 10;
//       }
//     }
//     if (bool) {
//       res += i + ",";
//     } else {
//       bool = true;
//     }
//   }
//   if (res === "") {
//     return "Such numbers does not exist";
//   } else {
//     return res;
//   }
// };
// console.log(finedNumbersWithEvenDigits(99, 199));

// //Task12

// const spellNumber = (number) => {
//   let digits = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "eleven",
//     "twelve",
//     "thirteen",
//     "fourteen",
//     "fifteen",
//     "sixteen",
//     "seventeen",
//     "eighteen",
//     "nineteen",
//   ];
//   let digitsTen = [
//     "hundred",
//     "ten",
//     "twenty",
//     "thirty",
//     "forty",
//     "fifty",
//     "sixty",
//     "seventy",
//     "eighty",
//     "ninety",
//   ];
//   numberString = number.toString();
//   let length = numberString.length;

//   let res = [];
//   for (let i = 0; i < 2; i++) {
//     if (length >= 2) {
//       if (number % 100 < 20 && number % 100 != 10) {
//         res.unshift(digits[(number % 100) - 1]);
//         res.unshift(" ");
//       } else {
//         if (number % 100 === 10) {
//           res.unshift(digitsTen[1]);
//           res.unshift(" ");
//         } else {
//           if (number % 10 != 0) {
//             res.unshift(digits[number % 10]);
//             res.unshift(" ");
//           }
//           res.unshift(digitsTen[((number % 100) - ((number % 100) % 10)) / 10]);
//           res.unshift(" ");
//         }
//       }
//     } else if (number % 10 < 10) {
//       res.unshift(digits[number % 10]);
//       res.unshift(" ");
//     }
//     if (length >= 3) {
//       res.unshift(digitsTen[0]);
//       res.unshift(" ");
//       res.unshift(digits[numberString[length - 3]]);
//       res.unshift(" ");
//     }
//     if (length > 3) {
//       res.unshift("thousand");
//       res.unshift(" ");
//       length -= 3;
//       numberString = numberString.substring(0, length - 1);
//       number = Math.floor(number / 1000);
//     } else {
//       i++;
//     }
//   }
//   return res.join("");
// };
// console.log(spellNumber(11));

// //Task 13

// const possibleSubset = (arr) => {
//   res = [];
//   let index = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         res[index] = [];
//         res[index].push(arr[i]);
//         res[index].push(arr[j]);
//         res[index].push(arr[k]);
//         index++;
//       }
//     }
//   }
//   return res;
// };
// console.log(possibleSubset([5, 9, 23, 0, -2, -1]));

// //Task14

// const productBiggestNeg = (arr) => {
//   let sum = -Infinity;
//   let sumTemp = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].constructor.name === "Array") {
//       for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] < 0) {
//           sumTemp += arr[i][j];
//         }
//       }
//       if (sum < sumTemp && sumTemp < 0) {
//         sum = sumTemp;
//       }
//       sumTemp = 0;
//     } else {
//       return "Invalid Argument";
//     }
//   }
//   if (sum != -Infinity) {
//     return Math.abs(sum);
//   } else {
//     return "No negatives";
//   }
// };
// console.log(
//   productBiggestNeg([
//     [3, 4],
//     [11, 0],
//     [5, 6, 7, 8],
//   ])
// );

// //Task15

// const invertObject = (obj) => {
//   res = {};
//   let temp;
//   let j = 0;
//   for (let i in obj) {
//     if (res.hasOwnProperty(obj[i]) && j === 0) {
//       temp = res[obj[i]];
//       res[obj[i]] = [];
//       res[obj[i]].push(temp);
//       res[obj[i]].push(i);
//       j++;
//     } else if (j != 0) {
//       res[obj[i]].push(i);
//     } else {
//       res[obj[i]] = i;
//     }
//   }
//   return res;
// };
// console.log(invertObject({ a: "1", b: "2", c: "2", d: "2" }));

// //Task16
// const sortObj = (arr) => {
//   res = [];
//   for (let i of arr) {
//     if (i.readStatus) {
//       res.push([i.book, i.percent]);
//     }
//   }
//   res.sort(function (a, b) {
//     return b[1] - a[1];
//   });
//   for (let i in res) {
//     res[i] = res[i][0];
//   }

//   return res;
// };
// console.log(
//   sortObj([
//     { book: "Catcher in the Rye", readStatus: true, percent: 40 },
//     { book: "Animal Farm", readStatus: true, percent: 20 },
//     { book: "Solaris", readStatus: false, percent: 90 },
//     { book: "The Fall", readStatus: true, percent: 50 },
//     { book: "White Nights", readStatus: false, percent: 60 },
//     { book: "After Dark", readStatus: true, percent: 70 },
//   ])
// );

//Task17
const shallowCompare = (a, b) => {
  if (
    Object.keys(a).length === Object.keys(b).length &&
    Object.keys(a).length === 0
  ) {
    return true;
  } else if (Object.keys(a).length === Object.keys(b).length) {
    for (i in a) {
      if (b.hasOwnProperty(i) && a[i] === b[i]) {
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

let a = {};
console.log(shallowCompare({ a: "1", b: "3" }, { a: "1", b: "2" }));
