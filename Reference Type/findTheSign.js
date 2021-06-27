//Find the sign of product of three numbers without multiplication operator. Display the specified sign.

let a = -2;
let b = 6;
let c = 8;
let sum = 0;
if (a < 0) {
  sum++;
}
if (b < 0) {
  sum++;
}
if (c < 0) {
  sum++;
}
if (a === 0 || b === 0 || c === 0) {
  console.log("Unsigned");
} else if (sum % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}
