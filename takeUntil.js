// takeUntil Function
const takeUntil = (array, callback) => {
  for (let i = 0; i < array.length; i++)
    if (callback(array[i])) return array.slice(0, i);
  return arr;
};

// Export
module.exports = takeUntil;
