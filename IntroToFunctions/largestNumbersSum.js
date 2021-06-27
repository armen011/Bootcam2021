//Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.

let sumLargNumber = function (str) {
  let sum = 0;
  let number = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) || str[i] === "-") {
      number.push(str[i]);
    } else {
      if (number.length === 0) {
      } else {
        sum += Number(number.join(""));
        number = [];
      }
    }
  }

  return sum;
};
console.log(sumLargNumber("“Wert12lop-12”"));
