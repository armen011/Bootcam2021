//Write a function redundant that takes in a string str and returns a function thatreturns str.

const redundant = (str) => {
  fun = () => {
    console.log(str);
  };
  return fun;
};
const f1 = redundant("Apple");
f1();
const f2 = redundant("Pear");
f2();
const f3 = redundant("");
f3();
