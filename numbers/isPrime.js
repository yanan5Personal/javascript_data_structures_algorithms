const expect = require("../utils/expect");

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return false;
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i++) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
}

expect("isPrime(2),", isPrime(2), true);
expect("isPrime(3),", isPrime(3), true);
expect("isPrime(4),", isPrime(4), false);
expect("isPrime(51),", isPrime(51), true);
