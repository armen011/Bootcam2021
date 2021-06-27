//Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

const sum = (arr) => {
  let sum = 0;
  for (let i of arr) {
    if (i % 2 === 0) {
      sum += i ** 2;
    } else {
      sum += i;
    }
  }
  return sum;
};
console.log(sum([1, 2, 3, 5, 7, 4]));
