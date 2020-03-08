const isCallable = (argument) => {
  let value = false;
  value = (typeof argument === 'function');
  return value;
};

module.exports = isCallable;
