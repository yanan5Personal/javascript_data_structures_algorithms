function palidromeChecker(string, beginIndex, endIndex) {
  let begin = beginIndex ?? 0;
  let end = endIndex ?? string.length - 1;
  if (begin >= end) {
    return true;
  }
  if (string[begin] !== string[end]) {
    return false;
  } else {
    return palidromeChecker(string, begin + 1, end - 1);
  }
}

console.log("iii", palidromeChecker("iii"));
console.log("hiih", palidromeChecker("hiih"));
console.log("deified", palidromeChecker("deified"));
console.log("racecar", palidromeChecker("racecar"));
console.log("testset", palidromeChecker("testset"));
console.log("aibohphobia", palidromeChecker("aibohphobia"));
console.log("ten", palidromeChecker("ten"));
console.log("tenx", palidromeChecker("tenx"));
