//Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
//from the array.

let sentence = "If at _ you donʼt _, try, try _.";
let words = ["first", "succeed", "again"];
for (let i = 0; i < words.length; i++) {
  sentence = sentence.replace("_", words[i]);
}
console.log(sentence);
