// Modules
const { countLetters } = require('../index');
const assert = require('chai').assert;

// Objects
const neferpitou = {
  N: 1,
  e: 2,
  f: 1,
  r: 1,
  p: 1,
  i: 1,
  t: 1,
  o: 1,
  u: 1,
};

const randomString = {
  E: 1,
  x: 1,
  a: 4,
  m: 1,
  p: 3,
  l: 1,
  e: 3,
  ' ': 8,
  s: 3,
  t: 3,
  r: 2,
  i: 5,
  n: 3,
  g: 1,
  w: 1,
  h: 1,
  c: 1,
  d: 2,
  o: 1,
  '.': 1,
};

const virmel = { V: 1, i: 1, r: 1, m: 1, e: 1, l: 1 };

// Tests
describe('#countLetters', () => {
  it('It should return an identical object', () => {
    assert.deepEqual(countLetters('Neferpitou'), neferpitou);
  });
  it('It should return an identical object', () => {
    assert.deepEqual(
      countLetters('Example string with spaces in it and a period.'),
      randomString
    );
  });
  it('It should return an identical object', () => {
    assert.deepEqual(countLetters('Virmel'), virmel);
  });
});
