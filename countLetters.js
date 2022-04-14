// assertEqual Function

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual != expected) {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countLetters Function

const countLetters = stringToCount => {
  const results = {};
  for (let letter of stringToCount) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

// Tests

// console.log(countLetters());
// console.log(countLetters(true));
// console.log(countLetters(["1", "2", "3"]));
// console.log(countLetters("Neferpitou"));
// console.log(countLetters("Example string with spaces in it and a period."));
console.log(countLetters('Virmel'));
