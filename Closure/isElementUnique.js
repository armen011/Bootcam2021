//Given an array. Determine whetherit consists only from uniques or not.

const isElementsUnique = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(isElementsUnique(["arm", "kar", "suren", "ashot", "arm"]));
