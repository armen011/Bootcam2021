//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let separate = function (arr = []) {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }
  return [odd, arr];
};

console.log(separate([2, 3, 4, 5, 6, 7, 13, 8, 911, 25]));
