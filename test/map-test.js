// Module
const { assert } = require('chai');
const { map } = require('../index');

// Arrays
const nums = [22, 11, 332, 434, 33, 11];
const names = ['billie', 'brian', 'virmel'];

//Tests
describe('#map', () => {
  it('Should capitilize first letter of every element in an array', () => {
    assert.deepEqual(
      map(names, firstName => {
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
      }),
      ['Billie', 'Brian', 'Virmel']
    );
  });
  it('Should triple every element in an array', () => {
    assert.deepEqual(
      map(nums, num => {
        return num * 3;
      }),
      [66, 33, 996, 1302, 99, 33]
    );
  });
});
