//Given an array of a size smallerthan 100. It consists of numbers from 0 to 99 in any order. Create a new
//array where each element from that array is placed underthe index of its value. Start from the smallest
//value and end with the biggest one. If there are missing values, put in its places undefined.

let arr = [26, 30, 19, 5];
arr.sort(function (a, b) {
  return a - b;
});
let arr1 = [];
let j = 0;
for (let i = 0; i <= arr[arr.length - 1]; i++) {
  if (i === arr[j]) {
    arr1[i] = arr[j];
    j++;
  } else {
    arr1[i] = undefined;
  }
}

console.log(arr1);
