function checkIfNumberIsPrime(element) {
  let halfOfElement = Math.floor(element / 2);
  let result = true;

  while (halfOfElement > 1) {
    if (element % halfOfElement === 0) {
      result = false;
      break;
    }
    halfOfElement -= 1;
  }

  return result;
}

function sumPrimes(maxNumber) {
  const arrayOfNumbersTillMaxInput = [...Array(maxNumber + 1).keys()];
  arrayOfNumbersTillMaxInput.splice(0, 2);

  const filteredArrayOfPrimeNumbers = arrayOfNumbersTillMaxInput.filter(checkIfNumberIsPrime);
  const sumOfPrimeNumbers = filteredArrayOfPrimeNumbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );

  return sumOfPrimeNumbers;
}


export {
  sumPrimes,
};
