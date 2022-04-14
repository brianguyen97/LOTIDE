// Middle Function
const middle = (array) => {
  let accumulator = [];
  if (array.length <= 2) {
    return accumulator;
  } else if (array.length % 2 === 0) {
    let evenIndex = array.length / 2;
    accumulator.push(array[evenIndex - 1]);
    accumulator.push(array[evenIndex]);
  } else if (array.length % 2 === 1) {
    let oddIndex = (array.length - 1) / 2;
    accumulator.push(array[oddIndex]);
  }
  return accumulator;
};

//Export
module.exports = middle;
