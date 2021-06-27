//Write a function, which receives an array as an argument which elements arrays of numbers. Find
//product of biggest negative number of each array. If there is not any negative number, ignore that array.
//Check that items of the given array are arrays.

const productBiggestNeg = (arr) => {
  let sum = -Infinity;
  let sumTemp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].constructor.name === "Array") {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] < 0) {
          sumTemp += arr[i][j];
        }
      }
      if (sum < sumTemp && sumTemp < 0) {
        sum = sumTemp;
      }
      sumTemp = 0;
    } else {
      return "Invalid Argument";
    }
  }
  if (sum != -Infinity) {
    return Math.abs(sum);
  } else {
    return "No negatives";
  }
};
console.log(
  productBiggestNeg([
    [3, 4],
    [11, 0],
    [5, 6, 7, 8],
  ])
);
