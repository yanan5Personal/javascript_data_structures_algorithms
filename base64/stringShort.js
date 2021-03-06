const DICTIONARY =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
function encodeId(num) {
  const base = DICTIONARY.length;
  let encoded = "";
  if (num === 0) {
    return DICTIONARY[0];
  }
  while (num > 0) {
    encoded += DICTIONARY[num % base];
    num = Math.floor(num / base);
  }
  return reverseWord(encoded);
}

function reverseWord(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}

function decodeId(id) {
  let base = DICTIONARY.length;
  let decoded = 0;
  const idLength = id.split("").length;
  for (let index = 0; index < idLength; index++) {
    decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
  }
  return decoded;
}
const encodedIdValue = encodeId(11231230);
const decodedIdValue = decodeId(encodedIdValue);
