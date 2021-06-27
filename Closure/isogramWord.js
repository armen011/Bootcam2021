//Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.

const isogram = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === " ") {
      } else if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isogram("artashat"));
