const getArrayOffibonacciNumbers = (
  firstNumber,
  secondNumber,
  arrayOfFibonacci,
  maxNumberInFibonacci,
) => {
  arrayOfFibonacci.push(firstNumber);

  if (maxNumberInFibonacci > secondNumber) {
    const sumOfNumbers = firstNumber + secondNumber;
    return getArrayOffibonacciNumbers(
      secondNumber, sumOfNumbers, arrayOfFibonacci, maxNumberInFibonacci,
    );
  }
  return arrayOfFibonacci;
};

const getOddNumbersFromArray = (fibonacciArray) => fibonacciArray.filter(
  number => number % 2 !== 0,
);

const sumFibs = (sizeOfFibonacci) => {
  const fibonacciArray = getArrayOffibonacciNumbers(1, 1, [], sizeOfFibonacci);
  const fibonacciArrayOddNumbers = getOddNumbersFromArray(fibonacciArray);
  const sumOfOddFibonacciNumbers = fibonacciArrayOddNumbers.reduce(
    (previousValue, currentValue) => currentValue + previousValue,
  );

  return sumOfOddFibonacciNumbers;
};


export {
  sumFibs,
};
