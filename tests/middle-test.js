//Module
const middle = require("../middle");

// Tests

const pets = ["cat", "dog", "bird", "fish", "bunny"];
const songs = ["bad guy", "bellyache", "Happier Than Ever"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const random = ["dog", 16, true, false, undefined, null];
const empty = [];

console.log(middle(pets));
console.log(middle(songs));
console.log(middle(nums));
console.log(middle(random));
console.log(middle(empty));
