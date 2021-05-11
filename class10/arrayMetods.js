// foreach with for
const runOnArray = (arr, fun) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    fun(element);
  }
};
const printAllItems = (el) => {
  console.log(el);
};
arr = [10, 15, 20, 22, 34, 26];
runOnArray(arr, printAllItems);
