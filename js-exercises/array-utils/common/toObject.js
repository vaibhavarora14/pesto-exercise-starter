const ToObject = (value) => {
  if (value === null || value === undefined) {
    throw new TypeError(`${value} is either null or undefined`);
  }

  // Checks of boolean, string, number, symbol are not present, as they are out of scope

  if (typeof value !== 'object') {
    throw new TypeError(`${value} is not an array`);
  }

  // returning object, which in our case should be an array
  return value;
};

module.exports = ToObject;
