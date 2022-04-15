// Modules
const assert = require('chai').assert;
const { takeUntil } = require('../index');

// Data
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];

// Tests
describe('#takeUntil', () => {
  it('Should iterate through the array until x is true', () => {
    assert.deepEqual(
      takeUntil(data1, x => x < 0),
      [1, 2, 5, 7, 2]
    );
  });
  it('Should iterate through the array until x is true', () => {
    assert.deepEqual(
      takeUntil(data2, x => x === ','),
      ["I've", 'been', 'to', 'Hollywood']
    );
  });
});
