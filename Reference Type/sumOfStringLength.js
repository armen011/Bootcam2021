//Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of theirlengths.

let arr = ["wish", "slightly", "understand", "longer", "unexpected", "heart"];
let max = 0,
  min = arr[3].length;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > max) {
    max = arr[i].length;
  }
  if (arr[i].length < min) {
    min = arr[i].length;
  }
}
console.log(min + max);
