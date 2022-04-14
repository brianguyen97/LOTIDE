//Module
const middle = require('../middle');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');

// Tests

const pets = ['cat', 'dog', 'bird', 'fish', 'bunny'];
const songs = ['bad guy', 'bellyache', 'Happier Than Ever'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const random = ['dog', 16, true, false, undefined, null];
const empty = [];

describe('#middle', () => {
  it('Returns bird', () => {
    assert.deepEqual(middle(pets), ['bird']);
  });
  it('Returns bellyache', () => {
    assert.deepEqual(middle(songs), ['bellyache']);
  });
  it('Returns 5 & 6', () => {
    assert.deepEqual(middle(nums), [5, 6]);
  });
  it('Returns true & false', () => {
    assert.deepEqual(middle(random), [true, false]);
  });
  it('Returns empty array', () => {
    assert.deepEqual(middle(empty), []);
  });
});
