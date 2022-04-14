// Modules
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

// Tests
assertArraysEqual([1, 2, 3, 4, 5], ["x", false, 17, "hi"]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
