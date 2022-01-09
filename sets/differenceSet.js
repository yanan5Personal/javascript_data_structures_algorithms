function differenceSet(setA, setB) {
  let difference = new Set(setA);
  for (let elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

const setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]);
console.log(differenceSet(setA, setB)); // Set {1, 4}
