# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @brianguyen97/LOTIDE`

**Require it:**

`const _ = require('@brianguyen97/LOTIDE');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(countLetters)`: Pass in a string, returns an object showing how many times each letter appears in the string

- `function2(countOnly)`: countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

- `function3(findKey)`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, undefined is returned

- `function4(findKeyByValue)`: Takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.

- `function5(flatten)`: Flatten takes in an array containing elements including nested arrays of elements, and returns a "flattened" version, removed the nested arrays.

- `function6(head)`: Takes in an array and returns the first element

- `function7(letterPositions)`: Returns all the indicies in the string where each character is found as an object

- `function8(map)`: Own version of map, iterates over an array, do something to it, and return a new array.

- `function9(middle)`: Returns the most middle element of an array, one element if there is an odd amount, two if it's even. Minimum of 3 elements

- `function10(tail)`: Takes in an array, returns a new array with everything besides the first element, the "tail".

- `function11(takeUntil)`: Takes in an array and a callback, the function will return a slice of the array, starting from element 0, and it'll keep going until the callback returns a truthy value.

- `function12(without)`: Takes in 2 arrays, and return everything from the first array, excluding the elements in the second array.

- `function13(assertArraysEqual)`: Takes in 2 arrays, compare them to see if they're equal.

- `function14(assertEqual)`: Compares 2 values to see if they're equal

- `function15(assertObjectsEqual)`: Compares 2 objects to see if they're equal.

- `function16(eqArrays)`: Compares 2 arrays to see if they're equal.

- `function17(eqObjects)`: Compares 2 objects to see if they're equal. Returns true or false.
