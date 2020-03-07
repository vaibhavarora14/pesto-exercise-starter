
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

const ToLength = (array) => {
  if (typeof array.length === 'number' && array.length >= 0) {
    return array.length;
  }

  // This error is not in specification. But I needed this to validate if it's array or not.
  throw new TypeError(`${array} is not an array`);
};

const isCallable = (argument) => {
  let value = false;
  value = (typeof argument === 'function');
  return value;
};

const customForEach = (array, callback, thisArgument) => {
  const object = ToObject(array);
  const length = ToLength(object);

  if (isCallable(callback)) {
    const callbackWithContext = callback.bind(thisArgument);
    let index = 0;
    while (index < length) {
      const item = object[index];
      callbackWithContext(item, index, object);
      index += 1;
    }
  } else {
    throw new TypeError(`${callback} is not a function`);
  }

  return undefined;
};

export {
  customForEach,
};
