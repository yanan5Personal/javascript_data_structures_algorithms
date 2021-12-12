function PascalTriangle(row, col) {
  if (col === 1) {
    return 1;
  } else if (row === 0) {
    return 0;
  } else {
    return PascalTriangle(row - 1, col) + PascalTriangle(row - 1, col - 1);
  }
}
console.log(PascalTriangle(5, 3));
