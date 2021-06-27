//Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
//print the quotient, otherwise print the remainder.

let n = 455;
let sum = 0;
let prod = 1;
let a;
if (n === 0) {
  console.log("Cannot calculate.");
} else {
  while (n > 0) {
    a = parseInt(n % 10);
    prod *= a;
    sum += a;
    n = (n - a) / 10;
  }
  if (prod % sum === 0) {
    console.log(`Quotient is ${prod / sum}`);
  } else {
    console.log(`Remainder is ${parseInt(prod % sum)}`);
  }
}
