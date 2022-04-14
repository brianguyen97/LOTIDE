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
    console.log("✅ Arrays are equal. ✅");
  } else {
    console.log("🛑 Arrays are not equal. 🛑");
  }
};

// letterPositions Function
const letterPositions = (inputString) => {
  let results = {};
  for (let i = 0; i < inputString.length; i++) {
    let letter = inputString[i];
    if (letter !== " ") {
      letter in results ? results[letter].push(i) : (results[letter] = [i]);
    }
  }
  return results;
};

/* Expected Output
  string = 'EILISH'
  return object = {
      E: [0],
      I: [1, 3],
      L: [2]
      S: [4]
      H: [5]
  }
  */

// Tests

console.log(letterPositions("EILISH"));
console.log(letterPositions("RANDOM STRING WITH SPACES IN IT"));
