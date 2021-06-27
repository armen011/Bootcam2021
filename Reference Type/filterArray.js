//Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
//in a separate array. Arrange them such as from the beginning are the odds and from the ending the
//evens.

let arr = [
  "Ashot",
  8,
  10,
  "Karen",
  "Vormizduxt",
  7,
  1,
  "Saratak",
  2,
  6,
  3,
  4,
  0,
  null,
];
let numbers = [];
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i]) && arr[i] != null) {
    if (arr[i] % 2 === 0) {
      numbers.push(arr[i]);
    } else {
      numbers.unshift(arr[i]);
    }
  }
}
console.log(numbers);
