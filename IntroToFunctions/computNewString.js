//Write a function to compute a new string from the given one by moving the first charto come afterthe
//next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars. Ignore
//any group of fewerthan 3 chars at the end.

let computString = function (str) {
  str = str.split("");
  let temp;
  for (let i = 0; i < str.length; i += 3) {
    if (i + 3 < str.length) {
      temp = str[i];
      str[i] = str[i + 1];
      str[i + 1] = str[i + 2];
      str[i + 2] = temp;
    }
  }
  return str.join("");
};
console.log(computString("aweyoolp"));
//“weaooylp”
//“fgdkljypo”
