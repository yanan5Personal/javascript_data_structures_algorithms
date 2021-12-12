function getNthFibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFibo(n - 1) + getNthFibo(n - 2);
  }
}

console.log(getNthFibo(10)); //  1 1 2 3 5 8 13 21 34 55
