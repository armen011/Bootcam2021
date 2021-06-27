//Given three numbers. Sort them by the ascending order.

let a = -23;
let b = -456;
let c = 0;
let temp;
if (b < a && b > c) {
  console.log(a, b, c);
} else if (b < c && b > a) {
  console.log(c, b, a);
} else if (c < a && c > b) {
  console.log(a, c, b);
} else if (c < b && c > a) {
  console.log(b, c, a);
} else if (a < b && a > c) {
  console.log(b, a, c);
} else if (a < c && a > b) {
  console.log(c, a, b);
}
