//Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the
//string. If there are several words which are the longest ones, print the last word(words can be separated
//by space, comma or hyphen).

let longestWord = function (sentence) {
  sentence = sentence.split(/[\s,-]+/);
  let word = sentence[0];

  for (let i = 0; i < sentence.length; i++) {
    if (word.length < sentence[i].length) {
      word = sentence[i];
    }
  }
  return word;
};
console.log(
  longestWord("A revolution without dancing is a revolution not worth having.")
);
