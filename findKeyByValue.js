// findKeyByValue Function
const findKeyByValue = (object, key) => {
  for (const k in object) {
    if (object[k] === key) {
      return k;
    }
  }
  return undefined;
};

// Export
module.exports = findKeyByValue;
