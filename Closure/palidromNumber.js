//Check whether string is palindrome, or not.

const palidrom = (str) => {
  let temp = str;
  if (str.length % 2 === 0) {
    length = str.length / 2;
  } else {
    length = Math.round(str.length / 2);
  }
  temp = temp.substring(0, length);

  for (let i = 0; i < temp.length; i++) {
    if (str[str.length - 1 - i] === temp[i]) {
    } else {
      return false;
    }
  }
  return true;
};
console.log(palidrom("repaper"));
