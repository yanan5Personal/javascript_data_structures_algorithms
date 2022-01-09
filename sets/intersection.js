function intersectSets(set1, set2) {
  let result = new Set();
  for (let elem of set1) {
    if (set2.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}

const setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]);
console.log(intersectSets(setA, setB));
