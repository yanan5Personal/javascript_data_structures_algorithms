function arraySlice(arr, startIndex, endIndex) {
  if (!startIndex && !endIndex) {
    return arr;
  }
  if (!endIndex) {
    endIndex = arr.length;
  }
  let arrToReturn = [];
  for (let i = startIndex; i < endIndex; i++) {
    arrToReturn.push(arr[i]);
  }
  return arrToReturn;
}
console.log(arraySlice([1, 2, 3, 4], 1, 2));
console.log(arraySlice([1, 2, 3, 4], 2, 4));
