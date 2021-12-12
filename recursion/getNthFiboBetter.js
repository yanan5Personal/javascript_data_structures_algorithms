function getNthFibBetter(n, lastlast, last) {
  if (n === 0) return lastlast;
  if (n === 1) return last;
  return getNthFibBetter(n - 1, last, last + lastlast);
}

console.log(getNthFibBetter(10, 0, 1)); //  1 2 3 5 8 13 21 34 55
