//map Function
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// assertArraysEqual Function

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log('✅ Arrays are equal. ✅');
  } else {
    console.log('🛑 Arrays are not equal. 🛑');
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

// Tests

const nums = [22, 11, 332, 434, 33, 11];
const triple = map(nums, num => {
  return num * 3;
});
console.log(triple);

const names = ['billie', 'brian', 'virmel'];
const uppercase = map(names, firstName => {
  return firstName.charAt(0).toUpperCase() + firstName.slice(1);
});
console.log(uppercase);

const nums2 = [-343.23, 22, 256.44, -13.23, 44];
const abs = map(nums2, num => {
  return Math.abs(Math.floor(num));
});
console.log(abs);
