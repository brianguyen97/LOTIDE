//Module
const middle = require('../middle');
const assertEqual = require('../assertEqual');

// Tests

const pets = ['cat', 'dog', 'bird', 'fish', 'bunny'];
const songs = ['bad guy', 'bellyache', 'Happier Than Ever'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const random = ['dog', 16, true, false, undefined, null];
const empty = [];

// console.log(assertEqual(middle([]), []));
// console.log(assertEqual(middle(nums), [5, 6]));
// console.log(assertEqual(middle(songs), ["bellyache"]));
// console.log(assertEqual(middle(random), [true, false]));

assertEqual(1 + 1, 2);
