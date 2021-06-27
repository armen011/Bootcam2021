//Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are largerthan the given number.

let find = function (arr, number) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      result.push(arr[i]);
    }
  }
  if (result.length === 0) {
    return "Such values do not exist.";
  } else {
    return result;
  }
};
console.log(find([10, 25, 16, -5, 30, 15, 24], 16));
