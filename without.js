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

// Without Function

const without = (array, excludeArray) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!excludeArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Tests

without([1, 2, 3], [1]); // => [2, 3]
without(['1', '2', '3'], [1, 2, '3']); // => ["1", "2"]

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
