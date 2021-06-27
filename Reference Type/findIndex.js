//Given an array of numbers and a number. Find the index of a first element which is equal to that number. If there is not such a number, that find the index of the first element which is the closest to it.

let numbers = [5, 46, 17, -2, 89, 0, 26];
let number = 36;
let index;
let length = Math.abs(numbers[0] - number);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === number) {
    index = i;
    break;
  } else if (length > Math.abs(numbers[i] - number)) {
    length = Math.abs(numbers[i] - number);
    index = i;
  }
}
console.log(index);
