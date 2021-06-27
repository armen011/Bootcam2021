var a = {
  valueOf: function () {
    return "hello";
  },
};
var b = {
  valueOf: function () {
    return 3;
  },
};
var c = {
  valueOf: function () {
    return new Number(3);
  },
};
var d = {
  toString: function () {
    return 123;
  },
};

var e = {
  toString: function () {
    return {};
  },
};

//console.log(null + undefined); //NaN undefined is NaN NaN plus 0=NaN
//console.log(null + true);//1 null is 0 and true is 1
//console.log(null + false); //0
//console.log(null + 3); //3
//console.log(null + NaN); //NaN
//console.log(null + "Hello"); //nullHello
//console.log(null + a + b + c + e + d); //error
//console.log(undefined + true); //NaN
//console.log(undefined + false); //NaN
//console.log(undefined + 5); //NaN
//console.log(undefined + undefined); //NaN
//console.log(undefined + "hello"); //undefiedhello
//console.log(undefined + a + b + c + d + e+f);//eror
//console.log(true + false); //1
//console.log(true + 2); //3
//console.log(true + NaN); //NaN
//console.log(true + "hello"); //truehello
//console.log(true + a + b + c + d + f); //eror
//console.log(false + 4); //5
//console.log(false + NaN); //NaN
//console.log(false + "hello"); //falsehello
//console.log(false + a + b + c + d +e+ f); //eror
//console.log(5 + 3); //8
//console.log(5 + NaN); //NaN
//console.log("hello" + 3);//hello3
//console.log(5 + a + b + c + d + e + f); //eror
//console.log("hello" + NaN); //helloNaN
//console.log("hello" + a + b + c + d + e + f); //error

/////////-
//console.log(-null);//-0
//console.log(-undefined); //-NaN //NaN
//console.log(-true); //-1
//console.log(-false); //-0
//console.log(-5); //-5
//console.log(-"hello"); //NaN
//console.log(-"234"); //-234
//console.log("-234.32e3"); //??//-234.32e3
//console.log(-new Number(NaN)); //NaN
//console.log(-new String("hello")); //NaN
//console.log(-/google.com/); //NaN
//console.log(-[]); //NaN//-0
//console.log(-[2]); //-2
//console.log(-[2, 3]); //NaN
//console.log(-function () {}); //NaN
//console.log(-a); //NaN
//console.log(-b); //-3
//console.log(-c); //NaN
//console.log(-d); //-123
//console.log(-e); //eror

//////++
//console.log(++null); //eror
//console.log(--null); //eror
//console.log(++true); //eror
//console.log(++"Hello"); //NaN//eror
//console.log(++"234"); //eror
//console.log(++new Number(NaN)); //eror

const fakeReduse = (arr = [], fun, type, index = 1, el = arr[0]) => {
  if (index === arr.length) {
    return el;
  }
  if (type === "" && index === 1) {
    el = "";
    el += arr[0];
  }
  el = fun(el, arr[index], index, arr);
  index++;
  return fakeReduse(arr, fun, type, index, el);
};

arr = [175, 25, 50, 40];
console.log(
  fakeReduse(
    arr,
    (a, b, i) => {
      a[i] = b;
      return a;
    },
    {}
  )
);
