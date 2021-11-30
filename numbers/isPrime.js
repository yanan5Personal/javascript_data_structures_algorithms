const expect = require("../utils/expect");

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

expect("isPrime(2),", isPrime(2), true);
expect("isPrime(3),", isPrime(3), true);
expect("isPrime(4),", isPrime(4), false);
expect("isPrime(5),", isPrime(4), false);
expect("isPrime(11),", isPrime(4), false);
expect("isPrime(51),", isPrime(51), true);

module.exports = isPrime;
