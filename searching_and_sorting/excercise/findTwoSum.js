function findTwoSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

function findTwoSumImproved(array, sum) {
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    if (cache[array[i]]) {
      return true;
    } else {
      cache[sum - array[i]] = array[i];
    }
  }
  return false;
}

module.exports = { findTwoSum, findTwoSumImproved };
