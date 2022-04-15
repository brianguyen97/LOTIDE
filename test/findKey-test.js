// Modules
const { findKey } = require('../index');
const assert = require('chai').assert;

// Data
const data = {
  'Blue Hill': { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

// Tests
describe('#findKey', () => {
  it('Should return noma', () => {
    assert.deepEqual(
      findKey(data, x => x.stars === 2),
      'noma'
    );
  });
  it('Should return "undefined"', () => {
    assert.deepEqual(
      findKey(data, x => x.stars === 5),
      undefined
    );
  });
});
