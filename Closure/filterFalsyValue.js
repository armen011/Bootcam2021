//Write a function that implements filtering in array

const filterFalsyValues = (values) => {
  res = [];
  for (let i of values) {
    if (i) {
      res.push(i);
    }
  }
  print = () => {
    console.log(res);
  };
  return print();
};
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
filterFalsyValues(values);
filterFalsyValues(["hello", 1233, []]);
