function arrayMedian(arr) {
  let len = arr.sort().length;
  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  } else {
    let half = len / 2;
    return (arr[half] + arr[half - 1]) / 2;
  }
}

console.log("[1, 2, 3]", arrayMedian([1, 2, 3]));
console.log("[1, 2, 3, 4]", arrayMedian([1, 2, 3, 4]));
console.log("[1, 4, 5, 2]", arrayMedian([1, 4, 5, 2]));

function medianOfTwoSortedArrays(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1;
  }
  if (pos === 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos === 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  let median1 = arrayMedian(arr1),
    median2 = arrayMedian(arr2);

  if (median1 === median2) {
    return median1;
  }
  let evenOffset = pos % 2 === 0 ? 1 : 0,
    offsetPlus = Math.floor(pos / 2) + evenOffset,
    offsetMinus = Math.floor(pos / 2) - evenOffset;
  if (median1 < median2) {
    return medianOfTwoSortedArrays(
      arr1.slice(offsetMinus),
      arr2.slice(offsetMinus),
      offsetPlus
    );
  } else {
    return medianOfTwoSortedArrays(
      arr2.slice(offsetMinus),
      arr1.slice(offsetMinus),
      offsetPlus
    );
  }
}

console.log(
  "medianOfTwoSortedArrays([1 , 2 , 3 ], [4 , 5 , 6 ], 3 )",
  medianOfTwoSortedArrays([1, 2, 3], [4, 5, 6], 3)
); // 3.5
console.log(
  "medianOfTwoSortedArrays([11 , 23 , 24 ], [32 , 33 , 450 ], 3 );",
  medianOfTwoSortedArrays([11, 23, 24], [32, 33, 450], 3)
); // 28
console.log(
  "medianOfTwoSortedArrays([1 , 2 , 3 ], [2 , 3 , 5 ], 3 );",
  medianOfTwoSortedArrays([1, 2, 3], [2, 3, 5], 3)
); // 2.5
