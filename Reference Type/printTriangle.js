//Task20
let arr = [];
for (let i = 0; i < 5; i++) {
  let k = 5;
  arr[i] = [];

  for (let j = 0; j <= i; j++) {
    if (k === 5) {
      arr[i].push(i + 1);
    } else {
      arr[i].push(arr[i][j - 1] + k);
    }
    k--;
  }
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(" "));
}
