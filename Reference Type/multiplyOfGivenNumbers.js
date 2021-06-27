//Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

let numTask4 = 24;
if (numTask4 % 3 === 0 && numTask4 % 5 === 0 && numTask4 % 7 === 0) {
  console.log(`${numTask4} is a multiple of 3, 5 and 7.”`);
} else if (numTask4 % 3 === 0 && numTask4 % 5 === 0) {
  console.log(`${numTask4} is a multiple of 3 and 5`);
} else if (numTask4 % 3 === 0 && numTask4 % 7 === 0) {
  console.log(`${numTask4} is a multiple of 3 and 7`);
} else if (numTask4 % 5 === 0 && numTask4 % 7 === 0) {
  console.log(`${numTask4} is a multiple of 7 and 5`);
} else if (numTask4 % 3 === 0) {
  console.log(`${numTask4} is a multiple of 3`);
} else if (numTask4 % 5 === 0) {
  console.log(`${numTask4} is a multiple of 5`);
} else if (numTask4 % 7 === 0) {
  console.log(`${numTask4} is a multiple of 7`);
} else {
  console.log(`${numTask4} is not a multiple of 3, 5 or 7`);
}
