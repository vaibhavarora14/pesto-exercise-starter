function throwErrorIfObjectInvalid(object) {
  if (typeof object !== 'object') {
    throw new TypeError(`Expected object type. But parameter is of ${typeof object} type`);
  }

  if (Array.isArray(object)) {
    throw new TypeError('Expected object. But parameter is array');
  }

  if (Object.keys(object) < 1) {
    throw new Error('Either object is empty, or its not object type');
  }
}

function objectInvert(object) {
  const objectLocalReference = object;

  throwErrorIfObjectInvalid(objectLocalReference);

  const keys = Object.keys(objectLocalReference);
  for (const argsKey of keys) {
    objectLocalReference[objectLocalReference[argsKey]] = argsKey;
    delete objectLocalReference[argsKey];
  }

  return objectLocalReference;
}


export {
  objectInvert,
};
