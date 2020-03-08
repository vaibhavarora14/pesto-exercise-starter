const ToLength = (array) => {
  if (typeof array.length === 'number' && array.length >= 0) {
    return array.length;
  }

  // This error is not in specification. But I needed this to validate if it's array or not.
  throw new TypeError(`${array} is not an array`);
};

module.exports = ToLength;
