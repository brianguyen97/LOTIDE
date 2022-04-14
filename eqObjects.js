// assertEqual
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual != expected) {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqObjects
const eqObjects = (object1, object2) => {
  for (let i = 0; i < Object.keys(object1).length; i++) {
    if (
      Object.keys(object1)[i] !== Object.keys(object2)[i] ||
      Object.values(object1)[i] !== Object.values(object2)[i] ||
      Object.keys(object1).length !== Object.keys(object2).length
    )
      return false;
  }
  return true;
};

// TESTS
const billieAlbumRatings = {
  WWAFAWDWG: 9,
  happierThanEver: 9,
  dontSmileAtMe: 10,
};

const billieAlbumRatings2 = {
  WWAFAWDWG: 9,
  happierThanEver: 9,
  dontSmileAtMe: 10,
};

console.log(eqObjects(billieAlbumRatings, billieAlbumRatings2)); // true test

const obj1 = {
  firstName: "Billie",
  lastName: "Eilish",
};

const obj2 = {
  firstName: "Brian",
  lastName: "Nguyen",
};

console.log(eqObjects(obj1, obj2)); // false test

console.log(eqObjects(billieAlbumRatings, obj2)); //false test
