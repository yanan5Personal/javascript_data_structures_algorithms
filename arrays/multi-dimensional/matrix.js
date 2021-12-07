function Matrix(rows, columns) {
  let multiArray = new Array(rows);
  let ele = 0;
  for (let i = 0; i < rows; i++) {
    multiArray[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      multiArray[i][j] = ++ele;
    }
  }
  return multiArray;
}

console.log(Matrix(3, 3));
