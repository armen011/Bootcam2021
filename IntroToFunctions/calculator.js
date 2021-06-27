//Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol. Write appropriate function for each operation.

let count = function (arr = [], symb = "+") {
  let sum = 0;
  let difference = arr[0];
  let mult = 1;
  let divison = arr[0];
  switch (symb) {
    case "+":
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    case "-":
      for (let i = 1; i < arr.length; i++) {
        difference -= arr[i];
      }
      return difference;
    case "*":
      for (let i = 0; i < arr.length; i++) {
        mult *= arr[i];
      }
      return mult;
    case "/":
      for (let i = 1; i < arr.length; i++) {
        divison /= arr[i];
      }
      return divison;
  }
};

console.log(count([5, 2, 4], "+"));
