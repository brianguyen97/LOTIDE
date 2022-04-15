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

// Export
module.exports = countLetters;
