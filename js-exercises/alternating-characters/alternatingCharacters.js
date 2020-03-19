// TODO: this function should support input of characters to be found and alternate as well
function countSwitchesForAlternateCharacters(element) {
  let countOfSwitch = 0;
  let expectingNextCharacterInString = element[0];
  for (const character of element) {
    if (character === expectingNextCharacterInString) {
      expectingNextCharacterInString = expectingNextCharacterInString === 'B' ? 'A' : 'B';
    } else {
      countOfSwitch += 1;
    }
  }

  return countOfSwitch;
}

function alternatingCharacters(arr) {
  const resultArray = [];
  const expectingStringRegex = /^[AB]*$/;

  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected argument of array, and instead got ${arr}`);
  }

  if (arr.length === 0) {
    resultArray.push(0);
    return resultArray;
  }

  for (const element of arr) {
    if (!expectingStringRegex.test(element)) {
      throw new TypeError(`Expected string element in Array to have either A or B.
      ${element} doesnot match that condition`);
    }

    if (element.length < 2) {
      resultArray.push(0);
    } else {
      const countOfCharacterToSwitch = countSwitchesForAlternateCharacters(element);
      resultArray.push(countOfCharacterToSwitch);
    }
  }

  return resultArray;
}


export { alternatingCharacters };
