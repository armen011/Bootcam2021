//Write a function, which receives two numbers as arguments and finds all numbers between them such
//that each digit of the numberis even. The numbers obtained should be printed in a comma-separated
//sequence on a single line.

const finedNumbersWithEvenDigits = (from, to) => {
  let check;
  let bool = true;
  let res = "";
  for (let i = from; i <= to; i++) {
    check = i;
    while (check > 0) {
      if (check % 2 != 0) {
        bool = false;
        break;
      } else {
        check = (check - (check % 10)) / 10;
      }
    }
    if (bool) {
      res += i + ",";
    } else {
      bool = true;
    }
  }
  if (res === "") {
    return "Such numbers does not exist";
  } else {
    return res;
  }
};
console.log(finedNumbersWithEvenDigits(99, 199));
