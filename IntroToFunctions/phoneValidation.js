//Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

let numberCheck = function (number) {
  number = number.split("");
  if (number.includes(" ")) {
    number.splice(number.indexOf(" "), 1);
  }
  number = number.join("");

  if (number.length === 10) {
    number = number.split("");
    if (number.includes("+")) {
      return "Bad number";
    } else {
      number = number.join("");
      return number;
    }
  } else if (number.length < 10) {
    return "Bad number";
  } else if (number.length > 11) {
    return "Bad number";
  } else if (number.length === 11) {
    number = number.split("");
    if (number[0] === "+") {
      number.splice(0, 1);
      if (number.includes("+")) {
        return "Bad number";
      }
      number = number.join("");
    } else {
      return "Bad number";
    }
    return number;
  }
};
console.log(numberCheck("123+2356897452"));
