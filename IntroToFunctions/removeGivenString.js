//. Write a function which receives two strings and removes appearances of the second string from the first one.

let remove = function (sentence = "", word = "") {
  return sentence.replace(new RegExp(word, "g"), "");
};
console.log(
  remove(
    "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather",
    "o"
  )
);
