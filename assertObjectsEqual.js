// eqObjects
const assertObjectsEqual = (object1, object2) => {
  const inspect = require("util").inspect;
  for (let i = 0; i < Object.keys(object1).length; i++) {
    if (
      Object.keys(object1)[i] !== Object.keys(object2)[i] ||
      Object.values(object1)[i] !== Object.values(object2)[i] ||
      Object.keys(object1).length !== Object.keys(object2).length
    ) {
      console.log(
        `❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)} ❌`
      );
      return;
    }
  }
  console.log(
    `✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)} ✅`
  );
  return;
};

// Tests
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

assertObjectsEqual(billieAlbumRatings, billieAlbumRatings2); // true test

const obj1 = {
  firstName: "Billie",
  lastName: "Eilish",
};

const obj2 = {
  firstName: "Brian",
  lastName: "Nguyen",
};

assertObjectsEqual(obj1, obj2); // false test
assertObjectsEqual(billieAlbumRatings, obj2); // false test
