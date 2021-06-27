//Write a function which remove elements with length <= 3

const filterByLength = (arr) => {
  res = [];
  for (let i of arr) {
    if (i.length > 3) {
      res.push(i);
    }
  }
  print = () => {
    console.log(res);
  };
  return print();
};
filterByLength(["kia", "tesla", "bmw", "mercedes"]);
