// letterPositions Function
const letterPositions = inputString => {
  let results = {};
  for (let i = 0; i < inputString.length; i++) {
    let letter = inputString[i];
    if (letter !== ' ') {
      letter in results ? results[letter].push(i) : (results[letter] = [i]);
    }
  }
  return results;
};

// Export
module.exports = letterPositions;
