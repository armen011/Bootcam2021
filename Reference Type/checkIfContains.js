//Insert a digit and a number. Check whetherthe digits contains in the number or not.

let numTask7 = 45678;
let digTask7 = 1;
numTask7 = numTask7.toString();
numTask7 = numTask7.split("");
digTask7 = digTask7.toString();
if (numTask7.includes(digTask7)) {
  console.log("Yes");
} else {
  console.log("No");
}
