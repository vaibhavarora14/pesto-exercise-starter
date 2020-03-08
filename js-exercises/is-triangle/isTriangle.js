import { validNumbers } from '../common/validNumbers';

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
