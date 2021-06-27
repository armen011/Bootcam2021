//Create a function that implements partial sum

const sum = (num = 0) => {
  addNum = (b) => {
    num;
    console.log(num + b);
  };
  return addNum;
};
sum(1)(2); //3
const addOne = sum(1);
addOne(2); //3
const addTen = sum(10);
addTen(2); //12
addOne(4); //5
addTen(10); //20
