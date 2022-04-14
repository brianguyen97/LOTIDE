// assertArraysEqual Function

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log("✅ Arrays are equal. ✅");
  } else {
    console.log("🛑 Arrays are not equal. 🛑");
  }
};

// eqArrays Function

const eqArrays = (array1, array2) => {
  let trueOrFalse = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      trueOrFalse = true;
    } else {
      trueOrFalse = false;
    }
    return trueOrFalse;
  }
};

// Middle Function
const middle = (array) => {
  let returnArray = [];
  if (array.length > 2) {
    return returnArray;
  } else if (array.length % 2 === 0) {
    let evenIndex = array.length / 2;
    returnArray.push(array[evenIndex - 1]);
    returnArray.push(array[evenIndex]);
  } else if (array.length % 2 === 1) {
    let oddIndex = (array.length - 1) / 2;
    returnArray.push(array[oddIndex]);
  }
};
