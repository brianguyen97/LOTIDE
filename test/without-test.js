// Modules
const { without } = require('../index');
const assert = require('chai').assert;

// Tests
describe('#without', () => {
  it('Should return an array, without certain elements', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('Should return an array, without "Lighthouse"', () => {
    assert.deepEqual(
      without(['Hello', 'World', 'Lighthouse'], ['Lighthouse']),
      ['Hello', 'World']
    );
  });
});
