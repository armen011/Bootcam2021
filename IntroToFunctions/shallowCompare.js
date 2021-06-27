//Given two objects. Write a function that performs shallow compare.

const shallowCompare = (a, b) => {
  if (
    Object.keys(a).length === Object.keys(b).length &&
    Object.keys(a).length === 0
  ) {
    return true;
  } else if (Object.keys(a).length === Object.keys(b).length) {
    for (i in a) {
      if (b.hasOwnProperty(i) && a[i] === b[i]) {
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

let a = {};
console.log(shallowCompare({ a: "1", b: "3" }, { a: "1", b: "2" }));
