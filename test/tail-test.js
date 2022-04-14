// Modules
const assert = require('chai').assert;
const tail = require('../tail');

// Tests
describe('#tail', () => {
  it('Returns all numbers besdies 0', () => {
    assert.deepEqual(tail([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
  it('Returns all pets besides dog', () => {
    assert.deepEqual(tail(['dog', 'cat', 'bird', 'rabbit', 'snake']), [
      'cat',
      'bird',
      'rabbit',
      'snake',
    ]);
  });
});
