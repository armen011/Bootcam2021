//Given a sentence as a string. Split it according to space and comma and create an array consisting of the words of the array. The last word should not contain the last . or! .

sentence = "May the Force be with,you.";
sentence = sentence.split(/[ ,]+/);
sentence[sentence.length - 1] = sentence[sentence.length - 1].replace(
  /[.!]/g,
  ""
);

console.log(sentence);
