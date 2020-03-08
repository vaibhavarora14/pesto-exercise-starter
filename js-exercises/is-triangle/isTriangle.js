const validNumbers = (...values) => {
  let result = true;

  if (values === undefined || values.length === undefined || values.length <= 0) {
    result = false;
    return result;
  }

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (typeof value !== 'number') {
      result = false;
      break;
    }
  }

  if (!result) {
    throw new TypeError(`
    One of the provided values is not a number.
    Check the values sent - ${values.toString()}
    `);
  }

  return result;
};

const isTriangle = (side1, side2, side3) => {
  let isValidTriangle = false;

  if (validNumbers(side1, side2, side3)) {
    if ((side1 + side2) > side3
      && (side2 + side3) > side1
      && (side3 + side1) > side2) {
      isValidTriangle = true;
    }
  }

  return isValidTriangle;
};


export {
  isTriangle,
};
