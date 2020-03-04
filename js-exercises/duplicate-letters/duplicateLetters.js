/* eslint linebreak-style: ["error", "windows"] */
function getMapLettersCountOf(lettersArray) {
  const lettersWithCountMap = new Map();

  lettersArray.forEach(letter => {
    let count = 1;

    if (lettersWithCountMap.has(letter)) {
      count += lettersWithCountMap.get(letter);
    }

    lettersWithCountMap.set(letter, count);
  });
  return lettersWithCountMap;
}

function getMaxValueOf(valuesArray) {
  return Math.max(...valuesArray);
}

function duplicateLetters(string) {
  const lettersArray = string.split('');
  const lettersWithCountMap = getMapLettersCountOf(lettersArray);
  const maxCount = getMaxValueOf(lettersWithCountMap.values());

  return maxCount === 1 ? false : maxCount;
}
export { duplicateLetters };
