//. Write a function, which willreceive a number between 0 to 999,999 and spell out that numberin English.

const spellNumber = (number) => {
  let digits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let digitsTen = [
    "hundred",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  numberString = number.toString();
  let length = numberString.length;

  let res = [];
  for (let i = 0; i < 2; i++) {
    if (length >= 2) {
      if (number % 100 < 20 && number % 100 != 10) {
        res.unshift(digits[(number % 100) - 1]);
        res.unshift(" ");
      } else {
        if (number % 100 === 10) {
          res.unshift(digitsTen[1]);
          res.unshift(" ");
        } else {
          if (number % 10 != 0) {
            res.unshift(digits[number % 10]);
            res.unshift(" ");
          }
          res.unshift(digitsTen[((number % 100) - ((number % 100) % 10)) / 10]);
          res.unshift(" ");
        }
      }
    } else if (number % 10 < 10) {
      res.unshift(digits[number % 10]);
      res.unshift(" ");
    }
    if (length >= 3) {
      res.unshift(digitsTen[0]);
      res.unshift(" ");
      res.unshift(digits[numberString[length - 3]]);
      res.unshift(" ");
    }
    if (length > 3) {
      res.unshift("thousand");
      res.unshift(" ");
      length -= 3;
      numberString = numberString.substring(0, length - 1);
      number = Math.floor(number / 1000);
    } else {
      i++;
    }
  }
  return res.join("");
};
console.log(spellNumber(11));
