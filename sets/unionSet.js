function unionSet(setA, setB) {
  let isFirstSetGreater = setA.size > setB.size;
  let union = isFirstSetGreater ? new Set(setA) : new Set(setB);
  let otherSet = isFirstSetGreater ? setB : setA;
  for (let elem of otherSet) {
    union.add(elem);
  }
  return union;
}

const setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5]);
console.log(unionSet(setA, setB)); // Set {1, 2, 3, 4}
console.log(unionSet(setA, setC)); // Set {1, 2, 3, 4, 5}
