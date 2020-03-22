const swap = (array, index1, index2) => {
  const arrayArgument = [...array];
  [arrayArgument[index1], arrayArgument[index2]] = [arrayArgument[index2], arrayArgument[index1]];
  return arrayArgument;
};

const swapFromLeftToRight = (array) => {
  const swappedArraysList = [];

  for (let index = 0; index < array.length - 1; index += 1) {
    let arrayForSwap = [];
    if (swappedArraysList.length === 0) {
      arrayForSwap = array;
    } else {
      arrayForSwap = swappedArraysList[swappedArraysList.length - 1];
    }

    swappedArraysList.push(swap(arrayForSwap, index, index + 1));
  }

  return swappedArraysList;
};

// const swapRightToLeft = (array) => {
//   const swappedArraysList = [];

//   for (let index = array.length - 1; index > 0; index -= 1) {
//     let arrayForSwap = [];
//     if (swappedArraysList.length === 0) {
//       arrayForSwap = array;
//     } else {
//       arrayForSwap = swappedArraysList[swappedArraysList.length - 1];
//     }

//     swappedArraysList.push(swap(arrayForSwap, index, index - 1));
//   }

//   return swappedArraysList;
// };


function permutateWithoutRepetitions(array) {
  let result = [];

  let argumentArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let arrayForSwap = [];

    if (result.length === 0) {
      arrayForSwap = array;
    } else if (array[index + 1] !== undefined) {
      arrayForSwap = swap(argumentArray, index, index + 1);
    } else {
      break;
    }

    if (result.find(ele => ele.toString() === arrayForSwap.toString()) !== undefined) {
      break;
    }

    argumentArray = arrayForSwap;
    result.push([...arrayForSwap]);
    result = [...result, ...swapFromLeftToRight(arrayForSwap)];
  }

  if (array.length > 2) {
    argumentArray = array;
    let arrayForSwap = [];
    for (let index = array.length - 1; index > 0; index -= 1) {
      if (index === 1) {
        index = array.length;
      } else {
        if (array[index] !== undefined) {
          arrayForSwap = swap(argumentArray, index, index - 1);
        } else {
          break;
        }

        const localArrayForSwap = arrayForSwap;
        if (result.find(ele => ele.toString() === localArrayForSwap.toString()) !== undefined) {
          break;
        }

        argumentArray = arrayForSwap;
        result.push([...arrayForSwap]);
        result = [...result, ...swapFromLeftToRight(arrayForSwap)];
      }
    }
  }

  return result;
}


export { permutateWithoutRepetitions };
