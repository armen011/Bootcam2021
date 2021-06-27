//Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.

let numTask9 = 63;
let bool = true;
if (numTask9 === 2) {
  bool = true;
} else if (numTask9 % 2 === 0) {
  bool = false;
} else {
  for (let i = 3; i < numTask9 / 2; i++) {
    if (numTask9 % i === 0) {
      bool = false;
    }
  }
}
if (bool) {
  console.log("Yes");
} else {
  console.log("No");
}
