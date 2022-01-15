function merge(leftArr, rightArr) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex++]);
    } else {
      result.push(rightArr[rightIndex++]);
    }
  }
  let remainingLeftItems = leftArr.slice(leftIndex),
    remainingRightItems = rightArr.slice(rightIndex);

  return result.concat(remainingLeftItems).concat(remainingRightItems);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const midpoint = Math.floor(array.length / 2);
  return merge(
    mergeSort(array.slice(0, midpoint)),
    mergeSort(array.slice(midpoint))
  );
}

console.log(mergeSort([6, 1, 23, 4, 2, 3]));
