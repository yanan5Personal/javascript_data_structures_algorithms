function SpiralPrint(mArr) {
  let topRow = 0,
    bottomRow = mArr.length - 1,
    leftCol = 0,
    rightCol = mArr[0].length - 1;

  while (topRow < bottomRow && leftCol < rightCol) {
    for (let col = 0; col <= rightCol; col++) {
      console.log(mArr[topRow][col]);
    }
    topRow++;
    for (let row = topRow; row <= bottomRow; row++) {
      console.log(mArr[row][rightCol]);
    }
    rightCol--;
    if (topRow <= bottomRow) {
      for (let col = rightCol; col >= leftCol; col--) {
        console.log(mArr[bottomRow][col]);
      }
      bottomRow--;
    }
    if (leftCol <= rightCol) {
      for (let row = bottomRow; row >= topRow; row--) {
        console.log(mArr[row][leftCol]);
      }
      leftCol++;
    }
  }
}
console.log(`[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ]`);
SpiralPrint([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
]);
