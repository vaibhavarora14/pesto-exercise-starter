
import { ToObject } from './common/toObject';
import { ToLength } from './common/toLength';
import { isCallable } from './common/isCallable';

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
};

export {
  customForEach,
};
