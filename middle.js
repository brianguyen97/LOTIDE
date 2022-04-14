// Middle Function
const middle = (array) => {
  let returnArray = [];
  if (array.length > 2) {
    return returnArray;
  } else if (array.length % 2 === 0) {
    let evenIndex = array.length / 2;
    returnArray.push(array[evenIndex - 1]);
    returnArray.push(array[evenIndex]);
  } else if (array.length % 2 === 1) {
    let oddIndex = (array.length - 1) / 2;
    returnArray.push(array[oddIndex]);
  }
};

//Export
module.exports = middle;
