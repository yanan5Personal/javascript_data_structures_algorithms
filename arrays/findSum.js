function findSum(arr, weight) {
  for (let i = 0, arrLen = arr.length; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (arr[i] + arr[j] === weight) return [i, j, arr[i], arr[j]];
    }
  }
  return -1;
}

function findSumBetter(arr, weight) {
  var hashtable = {};
  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    var currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[difference] != undefined) {
      return [i, hashtable[difference]];
    } else {
      // store index
      hashtable[currentElement] = i;
    }
  }
  return -1;
}
console.log(findSumBetter([1, 2, 3, 4, 5], 3));
console.log(findSum([1, 2, 3, 4, 5], 9));
