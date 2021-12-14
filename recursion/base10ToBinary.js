function base10ToBinary(n) {
  let binaryStr = "";
  function base10ToBinaryHelper(n) {
    if (n < 2) {
      binaryStr += n;
    } else {
      base10ToBinaryHelper(Math.floor(n / 2));
      base10ToBinaryHelper(n % 2);
    }
  }
  base10ToBinaryHelper(n);
  return binaryStr;
}

console.log(base10ToBinary(10));
