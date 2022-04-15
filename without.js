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

// Export
module.exports = without;
