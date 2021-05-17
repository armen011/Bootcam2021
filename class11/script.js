const compose = (obj) => {
  for (let index in obj) {
    index = index.split("-")[0];
    console.log(index);
    let res = [];
    for (let ind in obj) {
      if (ind.includes(index)) {
        res.push(obj[ind]);
        delete obj[ind];
      }
    }
    if (res.length > 1) {
      obj[`${index}s`] = res;
    } else {
      obj[index] = res[0];
    }
    res = [];
  }
};
let user = {
  name: "Armen",
  age: 12,
  "Email-1": 'armen21mkrtchyan0616"gmail.com',
  "Email-20": 'armenmkrtchyan14"mail.ru',
  "File-1": "hello world",
  "File-2": "hello men",
};
compose(user);
console.log(user);
