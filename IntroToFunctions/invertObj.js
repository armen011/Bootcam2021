//Given an object. Invert it (keys become values and values become keys). If there is more than key forthat given value create an array.

const invertObject = (obj) => {
  res = {};
  let temp;
  let j = 0;
  for (let i in obj) {
    if (res.hasOwnProperty(obj[i]) && j === 0) {
      temp = res[obj[i]];
      res[obj[i]] = [];
      res[obj[i]].push(temp);
      res[obj[i]].push(i);
      j++;
    } else if (j != 0) {
      res[obj[i]].push(i);
    } else {
      res[obj[i]] = i;
    }
  }
  return res;
};
console.log(invertObject({ a: "1", b: "2", c: "2", d: "2" }));
