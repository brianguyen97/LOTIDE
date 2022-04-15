// assertArraysEqual Function
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('✅ Arrays are equal. ✅');
  } else {
    console.log('❌ Arrays are not equal. ❌');
  }
};
