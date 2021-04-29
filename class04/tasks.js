//Literature Section
//OBJECTS
//Hello Object
let user = {}; //Create an empty object user
user.name = "John"; //Add niame property with value John
user.surname = "Smith"; //Add the property surname with the value Smith
user.name = "Pete"; //Change the value of the name to Pete
delete user.name; //Remove the property name from the object.
console.log(user);

//Sum
let sum = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
for (let employer in salaries) {
  sum += salaries[employer];
}
console.log(sum);

//Multiply numeric property values by 2

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(menu) {
  for (let prop in menu) {
    if (!isNaN(menu[prop])) {
      menu[prop] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

//ARRAYS
//Is Array copied?
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
// what's in fruits?
// Both has ["Apples", "Pear", "Orange","Banana"]

//alert(fruits.length); // wil alert 4

//Array operations

let style = ["Jazz", "Blues"]; //Create an array styles with items “Jazz” and “Blues”.
style.push("Rock-n-Roll"); //Append “Rock-n-Roll” to the end
if (style.length % 2 != 0) {
  style.splice(Math.floor(style.length / 2), 1, "Classics");
} else {
  console.log("Arrays length must be odd");
} //Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
style.shift(); //Strip off the first value of the array and show it.
style.unshift("Rap", "Reggae"); //Prepend Rap and Reggae to the array
console.log(style);

//Calling in Array context
let arr = ["a", "b"];

arr.push(function () {
  //alert( this );
});
arr[2](); //This will alert our array because this is our array

//Sum input numbers
// let numbers = [];
// function sumInput() {
//   let sum = 0;

//   let number = prompt("Input number");
//   if (!isNaN(number)) {
//     numbers.push(number);
//     sumInput();
//   } else {
//     for (let i of numbers) {
//       sum += +i;
//     }
//     alert(sum);
//   }
// }
// sumInput();

//A maximal subarray
arr = [1, -2, 3, 4, -9, 6];
function getMaxSubSum(arr) {
  let maxSubSum = 0;
  let SubSum = 0;

  for (let i of arr) {
    SubSum += i;
    maxSubSum = Math.max(maxSubSum, SubSum);
    if (SubSum < 0) {
      SubSum = 0;
    }
    if (SubSum + i < 0) {
      SubSum = 0;
    }
  }
  return maxSubSum;
}
console.log(getMaxSubSum([-1, -2, -3]));
