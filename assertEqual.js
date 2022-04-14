// assertEqual function
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual != expected) {
    console.log(` 🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Export
module.exports = assertEqual;
