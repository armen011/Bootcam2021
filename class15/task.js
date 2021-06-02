//Task1
const Pagination = {
  arr: [],
  curPage: 0,
  init: (arr, size) => {
    let res = [];
    let inp = [];
    for (let i = 0; i < arr.length; i++) {
      if (inp.length === size) {
        res.push(inp);
        inp = [];
      }
      inp.push(arr[i]);
    }
    if (inp.length != 0) {
      res.push(inp);
    }
    Pagination.arr = [...res];
  },
  nextPage: () => {
    if (Pagination.curPage + 1 < Pagination.arr.length) {
      Pagination.curPage += 1;
    } else {
    }
    return Pagination;
  },
  prevPage: () => {
    if (Pagination.curPage > 0) {
      Pagination.curPage -= 1;
    }
    return Pagination;
  },
  firstPage: () => {
    Pagination.curPage = 0;
  },
  lastPage: () => {
    Pagination.curPage = Pagination.arr.length - 1;
  },
  goToPage: (n) => {
    if (n >= 0 && n < Pagination.arr.length) {
      Pagination.curPage = n;
    }
  },
  getPageItems: () => {
    console.log(Pagination.arr[Pagination.curPage]);
  },
};
Pagination.init("abcdefghijklmno".split(""), 4);
Pagination.nextPage().nextPage().prevPage();
Pagination.firstPage();
//Pagination.lastPage();
Pagination.goToPage(3);
Pagination.getPageItems();

// //Task2
// const Airplane = {
//   isFlying: false,
//   takeOff: function () {
//     this.isFlying = true;
//   },
//   land: function () {
//     this.isFlying = false;
//   },
// };
// const first = Object.create(Airplane);
// first.takeOff();

// console.log(first.isFlying);
// const second = Object.create(Airplane);
// second.takeOff();
// second.land();
// console.log(second.isFlying);
