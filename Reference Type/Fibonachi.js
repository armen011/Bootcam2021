//Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1
//+ ak-2)

let n = 8;
let arr = [0, 1];
for (let i = 1; i < n - 1; i++) {
  arr.push(arr[i] + arr[i - 1]);
}
console.log(arr[n - 1]);
