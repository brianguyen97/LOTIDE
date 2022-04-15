// Modules
const assert = require('chai').assert;
const { flatten } = require('../index');

// Tests;
describe('#Should flatten array, getting rid of nested arrays', () => {
  it('Remove the 2 nested arrays', () => {
    assert.deepEqual(
      flatten([1, 2, 3, 4, [5, 6], 7, [8, 9]]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
  });
  it('Remove the single nested array', () => {
    assert.deepEqual(flatten(['i', 'love', ['billie', 'eilish']]), [
      'i',
      'love',
      'billie',
      'eilish',
    ]);
  });
});
