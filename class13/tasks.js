// //Task 1
// const obj = {
//   names: [],
//   set name(value) {
//     obj.names = value.split(",");
//   },
//   get name() {
//     let arr = [];
//     for (let i of obj.names) {
//       arr.push([i, i.length]);
//     }
//     return arr;
//   },
// };
// console.log(obj.name);
// obj.name = "Vrezh,Artavazd";
// console.log(obj.name);

// //Task2
// const getBestStudent = (obj) => {
//   let best = 0;
//   let name;
//   let temp;
//   for (let i in obj) {
//     temp = 0;
//     for (let m of obj[i]) {
//       temp += m;
//     }
//     temp /= obj[i].length;
//     if (temp > best) {
//       best = temp;
//       name = i;
//     }
//   }
//   return name;
// };

// console.log(
//   getBestStudent({
//     John: [100, 90, 80],
//     Bob: [100, 70, 80],
//   })
// );

// //Task3
// const monthsInterval = (from, to) => {
//   let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   let arr = [];
//   if (from.getFullYear() === to.getFullYear()) {
//     for (let j = from.getMonth(); j <= to.getMonth(); j++) {
//       arr.push(months[j]);
//     }
//   } else {
//     for (let i = from.getFullYear(); i <= to.getFullYear(); i++) {
//       if (i == to.getFullYear()) {
//         x = to.getMonth();
//       } else {
//         x = 11;
//       }
//       for (j = from.getMonth(); j <= x; j++) {
//         arr.push(months[j]);
//       }
//     }
//   }
//   return arr;
// };
// let january = new Date(2017, 0, 1);
// const march = new Date(2018, 0, 1);

// console.log(monthsInterval(january, march));

// //Task4
// const dayOfYear = (date) => {
//   let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   let res = 0;
//   let to = Number(date.split("/")[0]);
//   for (let i = 0; i < to; i++) {
//     if (i === to - 1) {
//       res += Number(date.split("/")[1]);
//     } else {
//       if (i == 1 && date.split("/")[2] % 4 === 0) {
//         res += 29;
//       } else {
//         res += months[i];
//       }
//     }
//   }

//   return res;
// };
// console.log(dayOfYear("12/31/2000"));

// //Task5
// const getDay = (string) => {
//   let names = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   [m, d, y] = string.split("/");
//   let date = new Date(string).getDay();
//   return names[date];
// };

// console.log(getDay("09/04/2016"));

// //Task06

// const formatDate = (date) => {
//   let res = "";
//   res += `${date.getDate()} ${date.toLocaleString("default", {
//     month: "short",
//   })} ${date.getFullYear()}`;
//   return res;
// };

// console.log(formatDate(new Date("2020-05-14")));
