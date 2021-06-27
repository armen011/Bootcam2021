//Output the books sorted by the percent in descending order which readStatus is true.

const sortObj = (arr) => {
  res = [];
  for (let i of arr) {
    if (i.readStatus) {
      res.push([i.book, i.percent]);
    }
  }
  res.sort(function (a, b) {
    return b[1] - a[1];
  });
  for (let i in res) {
    res[i] = res[i][0];
  }

  return res;
};
console.log(
  sortObj([
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
  ])
);
