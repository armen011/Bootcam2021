//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

const adjacentProduct = (arr) => {
  let prod = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] * arr[i + 1] > prod) {
      prod = arr[i] * arr[i + 1];
    }
  }
  return prod;
};
console.log(adjacentProduct([1, 2, 3, 4, 5, 2, 1, 3, 1, 6]));
