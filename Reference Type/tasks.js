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

//CONDITIONAL BRANCHING
//if(a string with zero )

// if ("0") {
//   alert( 'Hello' );
// } //will alert Hello because "0" is string and it's truthy

//The name of JS

// let JSname = prompt("What's the “official” name of JavaScript?");
// if (JSname === "ECMAScript") {
//   alert("Right");
// } else {
//   alert(`You don't know?
//           “ECMAScript”!`);
// }

//Show the sign

// let userNumber = prompt("input number");
// if (userNumber > 0) {
//   alert("1");
// } else if (userNumber < 0) {
//   alert("-1");
// } else {
//   alert("0");
// }

//Rewrite 'if' into '?'

//Task 1
let result;
let a = 1;
let b = 1;
// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }
a + b < 4 ? (result = "Below") : (result = "Over");
console.log(result);
//Task 2
let message;
let login = "Director";

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }
login === "Employee"
  ? (message = "Hello")
  : login === "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : (message = "");
console.log(message);

//SWITCH

//Rewrite 'switch' into an 'if'

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

let browser = "Edge";
if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

//Rewrite 'if' into 'switch

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
let num = 3;
switch (num) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  case 2:
  case 3:
    console.log("2,3");
    break;
}

//LOOPS

//Last loop value

// let i = 3;
// while (i) {
//   alert( i-- );
// } //the last alert will be '1' because while works till i=0,if increment was --i last will be 0

//Which values does the while loop show?

// let i = 0;
// while (++i < 5) alert( i );
// this loop's alerts [1,2,3,4]

// let i = 0;
// while (i++ < 5) console.log(i);
// this loop's alerts [1,2,3,4,5]

//Alerts are not the same

//Output even numbers in the loop from 2 to 10

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//replace for with while
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let i = 0;
while (i < 3) {
  console.log(`number ${i++}`);
}

//Repeat until the input is correct

// let numberForPromt = 0;
// while (numberForPromt <= 100) {
//   numberForPromt = prompt("Input number greater then 100");
//   if (numberForPromt === "") {
//     break;
//   }
// }

//Output prime numbers
let n = 20;
for (let i = 2; i < n; i++) {
  let bool = true;
  if (i === 2) {
    console.log(2);
  }
  if (i % 2 === 0) {
    continue;
  }
  for (let j = 3; j < i - 2; j += 2) {
    if (i % j === 0) {
      bool = false;
      break;
    }
  }
  if (bool) {
    console.log(i);
  }
}
