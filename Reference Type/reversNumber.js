//Enter a number. Reverse its first and last digits. Print the new number.

let numTask8 = 13;
let a;
let arrNum = [];
while (numTask8 > 0) {
  a = parseInt(numTask8 % 10);
  arrNum.unshift(a);
  numTask8 = (numTask8 - a) / 10;
}
a = arrNum[0];
arrNum[0] = arrNum[arrNum.length - 1];
arrNum[arrNum.length - 1] = a;
numTask8 = arrNum.join("");
numTask8 = parseInt(numTask8);
console.log(numTask8);
