// Modules
const { letterPositions } = require('../index');
const assert = require('chai').assert;

// Tests
describe('#letterPositions', () => {
  it('Show an object showing what index each letter appears at', () => {
    assert.deepEqual(letterPositions('EILISH'), {
      E: [0],
      I: [1, 3],
      L: [2],
      S: [4],
      H: [5],
    });
  });
  it('Show an object showing what index each letter appears at', () => {
    assert.deepEqual(letterPositions('RANDOM STRING WITH SPACES IN IT'), {
      R: [0, 9],
      A: [1, 21],
      N: [2, 11, 27],
      D: [3],
      O: [4],
      M: [5],
      S: [7, 19, 24],
      T: [8, 16, 30],
      I: [10, 15, 26, 29],
      G: [12],
      W: [14],
      H: [17],
      P: [20],
      C: [22],
      E: [23],
    });
  });
});
