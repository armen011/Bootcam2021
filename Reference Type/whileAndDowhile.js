//try to write a the following loop with while and do-while:
// let a = [15, 225, 36, 96, 102];
// for (var i = 0; i < a.length; i++) {
//   console.log("for", i, a[i]);
// }

i = 0;
while (i < a.length) {
  console.log("while", i, a[i++]);
}
i = 0;

do {
  console.log("do while", i, a[i++]);
} while (i < a.length);
