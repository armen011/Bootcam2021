// Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
// last digit of the inserted numberis 0, numberremains the same.
let numTask3 = 8;
numTask3 = String(numTask3);
numTask3 = numTask3.split("");
if (numTask3[numTask3.length - 1] !== "0") {
  let temp = numTask3[0];
  numTask3[0] = numTask3[numTask3.length - 1];
  numTask3[numTask3.length - 1] = temp;
}
numTask3 = parseInt(numTask3.join(""));

console.log(numTask3);
