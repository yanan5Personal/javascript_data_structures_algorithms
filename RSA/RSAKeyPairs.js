const isPrime = require("../numbers/isPrime");
const modInverse = require("./modInverse");
console.log(isPrime, modInverse);
function RSAKeyPairs(p, q) {
  if (!(isPrime(p) && isPrime(q))) {
    return;
  }
  if (p === q) {
    return;
  }
  console.log("outside", p, q);
  var n = p * q,
    phi = (p - 1) * (q - 1),
    e = 3,
    d = modInverse(e, phi);
  return [
    [e, n],
    [d, n],
  ];
}

console.log("RSAKeyParis", RSAKeyPairs(5, 11));
