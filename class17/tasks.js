// Function.prototype.myApply = function (context, argsArr) {
//   const key = "_tempFunc";
//   context[key] = this;
//   const result = context[key](...argsArr);
//   delete context[key];
//   return result;
// };
// function foo(a, b, c) {
//   this.a = a;
//   return a;
// }
// console.log(foo.myApply({}, [1]));
// console.log(foo.apply({}, [1]));
// //Task1
// class Shop {
//   constructor(name, menu = []) {
//     (this.name = name), (this.menu = menu), (this.orders = []);
//   }
//   addOrder(itemName) {
//     if (this.menu.some((elm) => elm.name === itemName)) {
//       this.orders.push(...this.menu.filter((elm) => elm.name === itemName));
//       return `${itemName} is orderd`;
//     } else {
//       return "This item is currently unavailable!";
//     }
//   }
//   fulfillOrder() {
//     if (this.orders.length === 0) {
//       return "All orders have been fulfilled!";
//     } else {
//       if (this.orders.length === 1) {
//         return `${this.orders[0].name} is ready!`;
//       } else {
//         return `${this.orders.map((elm) => elm.name).join(",")} are ready!`;
//       }
//     }
//   }
//   listOrders() {
//     if (this.orders.length === 0) {
//       return [];
//     } else {
//       return this.orders.map((elm) => elm.name);
//     }
//   }
//   dueAmount() {
//     if (this.orders.length === 0) {
//       return "0$";
//     } else if (this.orders.length === 1) {
//       return `${this.orders[0].price}`;
//     } else {
//       let amount = this.orders.reduce(
//         (first, next) => parseFloat(first.price) + parseFloat(next.price)
//       );
//       return `${amount}$`;
//     }
//   }
//   cheapestItem() {
//     return this.menu.sort(
//       (a, b) => parseFloat(a.price) - parseFloat(b.price)
//     )[0].name;
//   }
//   drinksOnly() {
//     return this.menu.filter((elm) => elm.isDrink).map((elm) => elm.name);
//   }
//   foodOnly() {
//     return this.menu.filter((elm) => !elm.isDrink).map((elm) => elm.name);
//   }
// }
// const latte = new Shop("Latte", [
//   {
//     name: "Nescafe",
//     price: "4.5$",
//     isDrink: true,
//   },
//   {
//     name: "Capuchino",
//     price: "5$",
//     isDrink: true,
//   },
//   {
//     name: "Sandwich",
//     price: "3$",
//     isDrink: false,
//   },
//   {
//     name: "Pizza",
//     price: "2$",
//     isDrink: false,
//   },
// ]);
// //console.log(latte.addOrder("Nescafe"));
// //console.log(latte.addOrder("Capuchino"));
// //console.log(latte.fulfillOrder());
// //console.log(latte.listOrders());
// //console.log(latte.dueAmount());
// //console.log(latte.cheapestItem());
// //console.log(latte.drinksOnly());
// //console.log(latte.foodOnly());

// //Task2
// class Shiritori {
//   words = [];
//   game_over = false;
//   play(word) {
//     if (this.game_over === true) {
//       console.log("The game is overd!");
//       return;
//     }
//     if (this.words.includes(word)) {
//       this.game_over = true;
//       console.log("The game is overd!");
//     } else {
//       if (this.words.length === 0) {
//         this.words.push(word);
//         console.log(this.words);
//       } else if (
//         this.words[this.words.length - 1][
//           this.words[this.words.length - 1].length - 1
//         ] === word[0]
//       ) {
//         this.words.push(word);
//         console.log(this.words);
//       } else {
//         this.game_over = true;
//         console.log("The game is overd!");
//       }
//     }
//   }
//   restart() {
//     this.words = [];
//     this.game_over = false;
//     console.log("The Game restarted!");
//   }
// }
// const g1 = new Shiritori();
// g1.play("armen");
// g1.play("narek");
// g1.play("armen");
// g1.play("karen");
// g1.restart();
// g1.play("hrach");

// //Task 3
// class Console {
//   constructor(type) {
//     this.type = type;
//     this.histories = [];
//   }
//   log(name, ...a) {
//     if (typeof name === "string") {
//       this.type = name;
//     } else {
//       a.unshift(name);
//     }
//     const res = a.map((elm) => {
//       if (Array.isArray(elm)) {
//         return `[${a}]`;
//       } else if (typeof elm === "object") {
//         let arr = [];
//         for (let i in elm) {
//           arr.push(`${i}:${elm[i]}`);
//         }
//         return `{${arr.join(",")}}`;
//       } else {
//         return elm;
//       }
//     });
//     this.histories.push(`${this.type}: ${res.join(",")}`);
//     console.log(`${this.type}: ${res.join(",")}`);
//   }
//   history() {
//     console.log(this.histories);
//   }
//   clearHistory() {
//     this.histories = [];
//   }
// }
// const myConsole = new Console("Regular");
// const fancyConsole = new Console("Fancy");
// myConsole.log([1, 2, 3, 4]);
// fancyConsole.log({ a: 1, b: 2 });
// myConsole.log("ok", [10, 11, 12], 1, 2, 3, 4);
// myConsole.history();
// fancyConsole.history();
// fancyConsole.clearHistory();
// fancyConsole.history();
