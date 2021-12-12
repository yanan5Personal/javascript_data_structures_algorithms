var board = `%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`;

function getMazeMatrix(boardString) {
  const rows = boardString.split("\n");
  return rows.map((row) => row.split("")).filter((row) => row.length);
}
function findChar(char, matrix) {
  let rows = matrix.length,
    columns = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === char) {
        return [i, j];
      }
    }
  }
}
function printMatrix(matrix) {
  var mazePrintStr = "",
    row = matrix.length,
    column = matrix[0].length;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < column; j++) {
      mazePrintStr += matrix[i][j];
    }
    mazePrintStr += "\n";
  }
  console.log("mazePrintStr\n", mazePrintStr);
  return mazePrintStr;
}

function mazePathFinder(mazeMatrix) {
  const rowLength = mazeMatrix.length,
    columnLength = mazeMatrix[0].length,
    startPos = findChar("e", mazeMatrix),
    endPos = findChar("x", mazeMatrix);

  path(startPos[0], startPos[1]);

  function path(row, column) {
    if (
      row > rowLength - 1 ||
      column > columnLength - 1 ||
      row < 0 ||
      column < 0
    ) {
      return false;
    }
    if (row === endPos[0] && column === endPos[1]) {
      return true;
    }
    if (mazeMatrix[row][column] === "%" || mazeMatrix[row][column] === "+") {
      return false;
    }
    mazeMatrix[row][column] = "+";
    printMatrix(mazeMatrix);
    if (
      path(row, column - 1) ||
      path(row + 1, column) ||
      path(row, column + 1) ||
      path(row - 1, column)
    ) {
      return true;
    }
    mazeMatrix[row][column] = ".";
    return false;
  }
}
console.log(mazePathFinder(getMazeMatrix(board)));
