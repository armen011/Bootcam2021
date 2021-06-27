//Write a function to find longest substring in a given a string withoutrepeating characters except space character. If there are several,return the last one. Considerthat all letters are lowercase.

const findLongestSubsrting = (str) => {
  let longestsubstrings = [];
  for (let i = 0; i < str.length; i++) {
    longestsubstrings[i] = [];
    longestsubstrings[i].push(str[i]);
    for (let j = i + 1; j < str.length; j++) {
      if (longestsubstrings[i].includes(str[j]) && str[j] != " ") {
        break;
      } else {
        longestsubstrings[i].push(str[j]);
      }
    }
  }
  let longestSubstring = longestsubstrings[0].join("");
  for (let i of longestsubstrings) {
    if (i.length >= longestSubstring.length) {
      longestSubstring = i.join("");
    }
  }
  return longestSubstring;
};

console.log(findLongestSubsrting("parting your soup is not a miracle, bruce."));
