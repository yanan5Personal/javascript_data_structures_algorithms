function binarySearch(arr, ele) {
  let lowerIndex = 0,
    higherIndex = arr.length - 1;
  while (lowerIndex <= higherIndex) {
    let middleIndex = Math.ceil((lowerIndex + higherIndex) / 2);
    if (arr[middleIndex] === ele) {
      return middleIndex;
    } else if (ele > arr[middleIndex]) {
      lowerIndex = middleIndex + 1;
    } else {
      higherIndex = middleIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4)); // true
console.log(binarySearch([1, 2, 3, 5, 6], 4)); // true
console.log(binarySearch([1, 2, 3, 4], 5));
