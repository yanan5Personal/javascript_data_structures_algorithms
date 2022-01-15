function countSort(arr) {
  let hash = {},
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  for (let key in hash) {
    for (let j = 0; j < hash[key]; j++) {
      result.push(parseInt(key));
    }
  }
  return result;
}
console.log(
  countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3])
);
