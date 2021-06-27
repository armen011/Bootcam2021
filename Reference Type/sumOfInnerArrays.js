//Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array.

let arr = [[1], [2], [3], [4]];
let sums = [];
for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  sums.push(sum);
}
console.log(sums);
