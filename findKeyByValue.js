// assertEqual
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual != expected) {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue Function
const findKeyByValue = (object, key) => {
  for (const k in object) {
    if (object[k] === key) {
      return k;
    }
  }
  return undefined;
};

// Tests

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire')); //Output: drama
console.log(findKeyByValue(bestTVShowsByGenre, 'drama')); //Output: undefined
console.log(findKeyByValue(bestTVShowsByGenre, '')); //Output: undefined

const billieAlbumRatings = {
  WWAFAWDWG: 9,
  happierThanEver: 9,
  dontSmileAtMe: 10,
};

console.log(findKeyByValue(billieAlbumRatings, 10)); //Output: dontSmileAtMe
console.log(findKeyByValue(billieAlbumRatings, 5)); //Output: undefined
console.log(findKeyByValue(billieAlbumRatings, 'ten')); //Output: undefined
