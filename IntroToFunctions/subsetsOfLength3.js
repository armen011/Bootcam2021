//Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.

const possibleSubset = (arr) => {
  res = [];
  let index = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        res[index] = [];
        res[index].push(arr[i]);
        res[index].push(arr[j]);
        res[index].push(arr[k]);
        index++;
      }
    }
  }
  return res;
};
console.log(possibleSubset([5, 9, 23, 0, -2, -1]));
