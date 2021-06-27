//Given an array of strings and numbers. Print the number of integers and the number of strings in the
//array.

let arr = [1, 2, 3, "Karen", 4, "Suro", "Vazgen", 45, 31, "Suro"];
let sumNumber = 0;
let sumString = 0;

for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    sumNumber++;
  } else {
    sumString++;
  }
}
console.log(`Numbers: ${sumNumber}, Strings: ${sumString}`);
