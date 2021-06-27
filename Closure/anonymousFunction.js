//Write a function thatreturns an anonymous function, which transforms its input by adding a particular suffix at the end.

const add_suffix = (suf) => {
  add = (str) => {
    console.log(str + suf);
  };
  return add;
};
add_ly = add_suffix("ly");
add_ly("hopeless");
add_ly("total");

add_less = add_suffix("less");
add_less("fear");
add_less("ruth");
