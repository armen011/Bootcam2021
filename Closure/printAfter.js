//Create a function printAfter that calls its argument after printing hello world

const printAfter = (print) => {
  console.log("Hello World");
  return print();
};

const print = () => console.log("Elon Musk");
printAfter(print);
