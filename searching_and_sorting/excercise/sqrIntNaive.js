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

module.exports = sqrtIntNaive;
