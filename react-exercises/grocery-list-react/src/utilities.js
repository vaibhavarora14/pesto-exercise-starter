const randomAlphaNumeric = () => {
  return Math.random().toString(32).slice(2);
}

export {
  randomAlphaNumeric
}