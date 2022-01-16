function sqrtIntNaive(number) {
  if (number == 0 || number == 1) return number;
  var index = 1,
    square = 1;
  while (square < number) {
    if (square == number) {
      return square;
    }
    index++;
    square = index * index;
  }
  return index;
}
function sqrtIntBinary(number) {
  if (number === 0 || number === 1) return number;
  let start = 1,
    end = number,
    ans;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (mid * mid === number) {
      return mid;
    }
    if (mid * mid > number) {
      end = mid - 1;
    } else {
      start = mid + 1;
      ans = mid;
    }
  }
  return mid;
}
module.exports = {
  sqrtIntNaive,
  sqrtIntBinary,
};
