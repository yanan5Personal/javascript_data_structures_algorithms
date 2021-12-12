function rotateMatrix90Left(matrix) {
  const N = matrix.length;

  for (let x = 0; x < N / 2; x++) {
    for (let y = x; y < N - x - 1; y++) {
      let temp = matrix[x][y];
      matrix[x][y] = matrix[y][N - 1 - x];
      matrix[y][N - 1 - x] = matrix[N - 1 - x][N - 1 - y];
      matrix[N - 1 - x][N - 1 - y] = matrix[N - 1 - y][x];
      matrix[N - 1 - y][x] = temp;
    }
  }
}

var matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];
console.log("matrix", matrix);
rotateMatrix90Left(matrix);
console.log("matrix", matrix);
