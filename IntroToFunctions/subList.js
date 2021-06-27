//Given a word and a list of possible anagrams, select the correct sublist.

let selectCorrectSublist = function (word, arr = []) {
  let wordLength = word.length;
  let result = [];
  let bool = true;
  word = word.split("");
  for (let i = 0; i < arr.length; i++) {
    bool = true;
    if (arr[i].length === wordLength) {
      arr[i] = arr[i].split("");
      for (let j = 0; j < wordLength; j++) {
        if (arr[i].includes(word[j])) {
        } else {
          bool = false;
          break;
        }
      }
    } else {
      continue;
    }
    if (bool) {
      result.push(arr[i].join(""));
    }
  }
  return result;
};
console.log(
  selectCorrectSublist("pencil", [
    "licnep",
    "circular",
    "pupil",
    "nilcpe",
    "leppnec",
  ])
);
