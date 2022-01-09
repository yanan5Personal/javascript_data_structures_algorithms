function checkDuplicates(arr) {
  let uniqueElem = new Set(arr);
  return uniqueElem.size < arr.length;
}
module.exports = checkDuplicates;
