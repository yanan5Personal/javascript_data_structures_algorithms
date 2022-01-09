function isSuperset(setA, subset) {
  for (let elem in subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

const setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);
console.log(isSuperset(setA, setB)); // true
// because setA has all elements that setB does
console.log(isSuperset(setA, setC)); // false
// because setA does not contain 5 which setC contains
