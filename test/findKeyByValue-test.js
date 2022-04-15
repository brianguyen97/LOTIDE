// Modules
const { findKeyByValue } = require('../index');
const { assert } = require('chai');

// Objects
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

const billieAlbumRatings = {
  WWAFAWDWG: 9,
  happierThanEver: 9,
  dontSmileAtMe: 10,
};

// Tests
describe('#findKeyByValue', () => {
  it('Should return drama', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it('Should return undefined', () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, 'drama'), undefined);
  });
  it('Should return dontSmileAtMe', () => {
    assert.deepEqual(findKeyByValue(billieAlbumRatings, 10), 'dontSmileAtMe');
  });
  it('Should return undefined', () => {
    assert.deepEqual(findKeyByValue(billieAlbumRatings, 5), undefined);
  });
});
