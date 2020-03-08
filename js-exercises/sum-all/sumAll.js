import { validNumbers } from '../common/validNumbers';

function sumAll(arrayOfTwoNumbers) {
  let result;
  if (validNumbers(...arrayOfTwoNumbers)) {
    result = 0;
    const number1 = arrayOfTwoNumbers[0];
    const number2 = arrayOfTwoNumbers[1];

    if (number1 === number2) {
      result = number1;
      return result;
    }

    const minimumNumber = Math.min(number1, number2);
    const maximumNumber = Math.max(number1, number2);

    for (let i = minimumNumber; i <= maximumNumber; i += 1) {
      result += i;
    }
  }

  return result;
}

export {
  sumAll,
};
