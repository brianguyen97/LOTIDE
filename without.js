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

// Export
module.exports = without;
