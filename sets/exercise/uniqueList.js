function uniqueList(arr1, arr2) {
  const uniqueSet = new Set(arr1.concat(arr2));
  return Array.from(uniqueSet);
}

module.exports = uniqueList;
