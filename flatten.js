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

// assertArraysEqual Function

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('✅ Arrays are equal. ✅');
  } else {
    console.log('🛑 Arrays are not equal. 🛑');
  }
};

// Flatten Function

const flatten = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      result.push(...arr[i]);
    }
  }
  return result;
};
